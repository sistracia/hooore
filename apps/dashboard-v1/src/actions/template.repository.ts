import { sql } from "@/lib/db";
import type { TemplateSchema } from "./template.definition";
import type { Result } from "@/types/result";
import { ADMIN_ROLE } from "./contants";

export async function getTemplatesRepo(): Promise<Result<TemplateSchema[]>> {
  try {
    const result = await sql<TemplateSchema[]>`
        SELECT
            pr.id,
            t.code,
            t."name",
            t.thumbnail_url
        FROM
            "template" t
        LEFT JOIN template_content tc
            ON tc.template_id = t.id
        LEFT JOIN page_content pc
            ON pc.template_content_id = tc.id
        LEFT JOIN page p
            ON p.id = pc.page_id
        LEFT JOIN project pr
            ON pr.id = p.project_id
        LEFT JOIN "user" u
            ON u.id = pr.user_id
        WHERE 
            u."role" = ${ADMIN_ROLE}
        GROUP BY pr.id, t.code, t.name, t.thumbnail_url
        `;

    return {
      success: true,
      data: result,
    };
  } catch {
    return {
      success: false,
      error: "GTR: Uncatched error.",
    };
  }
}
