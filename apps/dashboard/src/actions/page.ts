import type { Result } from "@/types/result";
import { getPageContentsByIdRepo } from "./page.repository";
import type { PageContent } from "./page.definition";
import { getProjectNavbarByProjectIdRepo } from "./project-navbar.repository";

export async function getPageContentsById(
  userId: string,
  projectId: string,
  pageId: string,
): Promise<
  Result<{ navbar: PageContent | undefined; contents: PageContent[] }>
> {
  const [_navbar, _contents] = await Promise.all([
    getProjectNavbarByProjectIdRepo(userId, projectId),
    getPageContentsByIdRepo(userId, projectId, pageId),
  ]);

  const navbar: PageContent | undefined =
    _navbar.success && _navbar.data !== undefined
      ? {
          ..._navbar.data,
          name: "",
          page_slug: "",
          last_edited: new Date(0),
        }
      : undefined;

  const contents: PageContent[] = _contents.success ? _contents.data : [];

  return {
    success: true,
    data: {
      navbar,
      contents,
    },
  };
}
