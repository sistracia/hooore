import {
  getProjectPagesRepo,
  updatePagePublishRepo,
} from "@/actions/page.repository";
import { getPageContentsById } from "@/actions/page";
import { PageForm } from "./form";
import type { PageContent } from "@/actions/page.definition";
import { validateRequest } from "@/lib/auth";
import { redirect } from "next/navigation";
import type { FuncActionState } from "@/types/result";
import { revalidatePath } from "next/cache";
import {
  getProjectByIdRepo,
  updateProjectPublishRepo,
} from "@/actions/project.repository";

export default async function PagesPage(props: {
  params: Promise<{ projectId: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { user } = await validateRequest();
  if (!user) {
    return redirect("/login");
  }

  const projectId = (await props.params).projectId;
  const pageIdParam = (await props.searchParams)["page_id"];

  const [project, projectPages] = await Promise.all([
    getProjectByIdRepo(projectId),
    getProjectPagesRepo(user.id, projectId),
  ]);

  if (!project.success || !project.data) {
    return redirect("/project-setup");
  }

  let pageId: string = "";
  let projectNavbar: PageContent | null = null;
  let pageContents: PageContent[] = [];
  if (typeof pageIdParam === "string") {
    pageId = pageIdParam;
    const _pageContents = await getPageContentsById(
      user.id,
      projectId,
      pageIdParam,
    );

    projectNavbar =
      _pageContents.success && _pageContents.data.navbar
        ? _pageContents.data.navbar
        : null;
    pageContents = _pageContents.success ? _pageContents.data.contents : [];
  }

  return (
    <PageForm
      project={project.data}
      pageId={pageId}
      pageContents={pageContents}
      projectNavbar={projectNavbar}
      pages={projectPages.success ? projectPages.data : []}
      publishAction={publishAction}
    />
  );
}

async function publishAction(
  projectId: string,
  pageId: string,
  needPublish: boolean,
): Promise<FuncActionState> {
  "use server";
  const updatedPage = await updatePagePublishRepo(pageId, needPublish);
  if (!updatedPage.success) {
    return updatedPage;
  }

  const updatedProject = await updateProjectPublishRepo(projectId, true);
  if (!updatedProject.success) {
    return updatedProject;
  }

  revalidatePath("/project/[projectId]", "layout");
  return {
    success: true,
    data: "",
  };
}
