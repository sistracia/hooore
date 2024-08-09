import { validateRequest } from "@/lib/auth";
import PageEditForm from "./form";
import { redirect } from "next/navigation";
import { getPageContentsByIdRepo } from "@/actions/page.repository";

export default async function PageEditPate(props: {
  params: { pageId: string };
}) {
  const pageId = props.params.pageId;
  const { user } = await validateRequest();
  if (!user) {
    return redirect("/login");
  }
  const pageContents = await getPageContentsByIdRepo(pageId);

  return (
    <PageEditForm
      pageId={pageId}
      pageContents={pageContents.success ? pageContents.data : []}
    />
  );
}
