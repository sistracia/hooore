import { sql } from "@/lib/db";
import { TemplateSchema } from "./template.definition";

export async function getTemplates() {
  return await sql<TemplateSchema[]>`
    SELECT
        id, code, name, thumbnail_url
    FROM template
    
    `;
}
