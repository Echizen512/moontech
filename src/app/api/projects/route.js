import { turso } from "@/app/model/connectionWithDB";

export async function GET(req) {
  try {
    // Fetch projects and their images
    const result = await turso.execute(`
      SELECT 
        p.id,
        p.title,
        p.description,
        p.category,
        p.video_url,
        p.technologies,
        pi.image_url,
        pi.is_main
      FROM projects p
      LEFT JOIN project_images pi ON p.id = pi.project_id
    `);

    const rows = result.rows;

    if (rows.length === 0) {
      return Response.json({ msg: "No results found" });
    }

    // Group images by project
    const projectsMap = new Map();

    for (const row of rows) {
      const projectId = row.id;

      if (!projectsMap.has(projectId)) {
        projectsMap.set(projectId, {
          id: projectId,
          title: row.title,
          description: row.description,
          category: row.category,
          video_url: row.video_url,
          technologies: row.technologies,
          images: []
        });
      }

      if (row.image_url) {
        projectsMap.get(projectId).images.push({
          url: row.image_url,
          is_main: row.is_main
        });
      }
    }

    const projects = Array.from(projectsMap.values());

    return Response.json({ data: projects });
  } catch (error) {
    console.error("Error fetching projects:", error);
    return Response.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
