import {
  getProjectPagesRepo,
  getPageContentsByIdRepo,
} from "@/actions/page.repository";
import { PageForm } from "./form";
import { type PageContent } from "@/actions/page.definition";

export default async function PagesPage(props: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const pageIdParam = props.searchParams["page_id"];

  const projectPages = await getProjectPagesRepo();

  let pageId: string | null = null;
  let pageContents: PageContent[] | null = null;
  if (typeof pageIdParam === "string") {
    pageId = pageIdParam;
    const _pageContents = await getPageContentsByIdRepo(pageIdParam);
    pageContents =
      _pageContents.success && _pageContents.data ? _pageContents.data : null;
  }

  return (
    <PageForm
      pageId={pageId}
      pageContents={pageContents}
      pages={projectPages.success ? projectPages.data : []}
    />
  );
}
