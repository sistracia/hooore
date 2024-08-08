import { Result } from "@/types/result";
import { PageContent, PageSchema } from "./page.definition";
import { sql } from "@/lib/db";

export async function getProjectPagesRepo(
  projectId: string = "gyqqywqu3tawsw1",
): Promise<Result<PageSchema[]>> {
  try {
    const pages = await sql<[PageSchema]>`
            SELECT
                id,
                name,
                slug,
                published,
                last_edited,
                create_date,
                type
            FROM
                page
            WHERE
                project_id = ${projectId}
                AND type != 'not-page'
          `;

    return { success: true, data: pages };
  } catch {
    return { success: false, error: "GPPR: Uncatched error." };
  }
}

export async function getPageContentsByIdRepo(
  pageId: string,
): Promise<Result<PageContent[]>> {
  try {
    const pageContents = await sql<PageContent[]>`
            SELECT
                pc.id,
                pc."content",
                p."name",
                p.slug as page_slug,
                tc.slug,
                tc."name" content_name,
                t.code
            FROM
                page_content pc
            LEFT JOIN
                page p
                    ON p.id = pc.page_id 
            LEFT JOIN
                template_content tc
                    ON tc.id = pc.template_content_id
            LEFT JOIN
                "template" t
                    ON t.id = tc.template_id
            WHERE p.id = ${pageId}
            ORDER BY pc."order" ASC
            `;

    return { success: true, data: pageContents };
  } catch {
    return { success: false, error: "GPBIR: Uncatched error." };
  }
}
