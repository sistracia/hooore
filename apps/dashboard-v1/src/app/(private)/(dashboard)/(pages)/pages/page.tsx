import {
  getProjectPagesRepo,
  getPageContentByIdRepo,
} from "@/actions/page.repository";
import { PageForm } from "./form";
import { type PageContent } from "@/actions/page.definition";

export default async function PagesPage(props: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const pageIdParam = props.searchParams["page_id"];

  const projectPages = await getProjectPagesRepo();

  let pageContents: PageContent[] | null = null;
  if (typeof pageIdParam === "string") {
    const _pageContents = await getPageContentByIdRepo(pageIdParam);
    pageContents =
      _pageContents.success && _pageContents.data ? _pageContents.data : null;
  }

  return (
    <PageForm
      pageContents={pageContents}
      pages={projectPages.success ? projectPages.data : []}
    />
  );
}
