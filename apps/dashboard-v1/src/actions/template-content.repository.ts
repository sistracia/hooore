import { sql } from "@/lib/db";
import type { TemplateContentSchema } from "./template-content.definition";
import type { Result } from "@/types/result";
import { NAVIGATION_TYPE } from "./contants";

export async function getTemplateContentsRepo(
  search: string,
): Promise<Result<TemplateContentSchema[]>> {
  try {
    const result = await sql<TemplateContentSchema[]>`
        SELECT
            tc.id,
            tc.name,
            tc.slug,
            tc.content_schema as content,
            t.code
        FROM
            template_content tc
        LEFT JOIN
            template t
                ON t.id = tc.template_id
        WHERE
            tc.name ILIKE ${search + "%"}
            AND tc.type != ${NAVIGATION_TYPE}
        `;

    return {
      success: true,
      data: result,
    };
  } catch {
    return {
      success: false,
      error: "GTCR: Uncatched error.",
    };
  }
}
