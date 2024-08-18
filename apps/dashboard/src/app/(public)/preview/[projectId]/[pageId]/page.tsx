import { getPagePreviewByIdRepo } from "@/actions/preview.repository";
import { getProjectByIdRepo } from "@/actions/project.repository";
import { PageRenderer } from "@/components/components-form/page-renderer";
import { redirect } from "next/navigation";

export default async function PreviewPage(props: {
  params: { projectId: string; pageId: string };
}) {
  const { projectId, pageId } = props.params;

  const [project, preview] = await Promise.all([
    getProjectByIdRepo(projectId),
    getPagePreviewByIdRepo(pageId),
  ]);
  if (!preview.success || !preview.data || !project.success || !project.data) {
    return redirect("/not-found");
  }

  return (
    <PageRenderer
      contents={preview.data.content}
      disableLink={true}
      projectLogo={project.data.business_logo}
    />
  );
}
