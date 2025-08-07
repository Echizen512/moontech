import { turso } from "@/app/model/connectionWithDB";

export async function GET(req) {
  try {
    const result = await turso.execute(`
      SELECT 
        tm.id, 
        tm.name, 
        tm.position, 
        tm.image_url, 
        tm.bio, 
        s.skill_name 
      FROM team_members tm
      LEFT JOIN skills s ON tm.id = s.member_id
    `);

    const rows = result.rows;

    if (rows.length === 0) {
      return Response.json({ msg: "No team members found" });
    }

    const teamMap = new Map();

    for (const row of rows) {
      const memberId = row.id;

      if (!teamMap.has(memberId)) {
        teamMap.set(memberId, {
          id: memberId,
          name: row.name,
          position: row.position,
          image_url: row.image_url,
          bio: row.bio,
          skills: [],
        });
      }

      if (row.skill_name) {
        teamMap.get(memberId).skills.push(row.skill_name);
      }
    }

    const team = Array.from(teamMap.values());

    return Response.json({ data: team });
  } catch (error) {
    console.error("Error fetching team members:", error);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}
