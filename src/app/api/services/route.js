import { turso } from "@/app/model/connectionWithDB";

export async function GET() {
  try {
    const result = await turso.execute(`
      SELECT id, title, description, icon_name FROM services
    `);

    const rows = result.rows;

    return Response.json({ data: rows });
  } catch (error) {
    console.error("Error fetching services:", error);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}
