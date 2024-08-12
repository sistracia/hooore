import { sql } from "@/lib/db";
import type { PageContentSchema } from "./page-content.definition";
import type { Result } from "@/types/result";

export async function getPageContentsRepo(
  userId: string,
  search: string,
): Promise<Result<PageContentSchema[]>> {
  try {
    const result = await sql<PageContentSchema[]>`
        SELECT
            pc.id, tc."name", tc.slug, pc."content"
        FROM
            page_content pc
        LEFT JOIN
            template_content tc
                ON tc.id = pc.template_content_id
        LEFT JOIN
            page p
                ON p.id = pc.page_id
        LEFT JOIN
            project pr
                ON pr.id = p.project_id
        WHERE
            pr.user_id = ${userId}
            AND tc."name" ILIKE ${search + "%"}
        `;

    return {
      success: true,
      data: result,
    };
  } catch {
    return {
      success: false,
      error: "GPCR: Uncatched error.",
    };
  }
}
