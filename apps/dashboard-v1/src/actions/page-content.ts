import { sql } from "@/lib/db";
import type {
  PageContentSchema,
  PageSnippetSchema,
} from "./page-content.definition";
import type { Result } from "@/types/result";
import { insertPageContentsRepo } from "./page-content.repository";
import { generateIdFromEntropySize } from "lucia";

export async function getPageSnippetsRepo(
  userId: string,
  search: string,
): Promise<Result<PageSnippetSchema[]>> {
  try {
    const result = await sql<PageSnippetSchema[]>`
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

export async function updatePageContents(
  projectId: string,
  pageId: string,
  editedDate: Date,
  pageContents: Pick<PageContentSchema, "content" | "template_content_id">[],
): Promise<Result<null>> {
  try {
    await insertPageContentsRepo(
      projectId,
      pageId,
      editedDate,
      pageContents.map((pageContent, pageContentIndex) => {
        return {
          id: generateIdFromEntropySize(15),
          content: pageContent.content,
          template_content_id: pageContent.template_content_id,
          order: pageContentIndex + 1,
          page_id: pageId,
        };
      }),
    );

    return {
      success: true,
      data: null,
    };
  } catch {
    return {
      success: false,
      error: "IPCR: Uncatched error.",
    };
  }
}
