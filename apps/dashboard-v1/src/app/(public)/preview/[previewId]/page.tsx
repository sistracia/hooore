import { getPagePreviewByIdRepo } from "@/actions/preview.repository";
import { PageRenderer } from "@/components/page-renderer";
import { redirect } from "next/navigation";

export default async function PreviewPage(props: {
  params: { previewId: string };
}) {
  const previewId = props.params.previewId;

  const preview = await getPagePreviewByIdRepo(previewId);
  if (!preview.success || preview.data === undefined) {
    return redirect("/not-found");
  }

  return <PageRenderer contents={preview.data.content} disableLink={true} />;
}
