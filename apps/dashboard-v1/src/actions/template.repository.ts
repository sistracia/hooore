import { sql } from "@/lib/db";
import { TemplateSchema } from "./template.definition";

export async function getTemplatesRepo() {
  return await sql<TemplateSchema[]>`
    SELECT
        id, code, name, thumbnail_url
    FROM template
    
    `;
}
