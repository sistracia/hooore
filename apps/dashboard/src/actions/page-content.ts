import type { PageContentSchema } from "./page-content.definition";
import type { Result } from "@/types/result";
import { insertPageContentsRepo } from "./page-content.repository";
import { generateIdFromEntropySize } from "lucia";

export async function updatePageContents(
  projectId: string,
  pageId: string,
  editedDate: Date,
  projectNavbar: Pick<
    PageContentSchema,
    "id" | "content" | "template_content_id"
  > | null,
  pageContents: Pick<PageContentSchema, "content" | "template_content_id">[],
): Promise<Result<null>> {
  try {
    await insertPageContentsRepo(
      projectId,
      pageId,
      editedDate,
      projectNavbar
        ? {
            id: projectNavbar.id,
            content: projectNavbar.content,
            template_content_id: projectNavbar.template_content_id,
          }
        : null,
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
