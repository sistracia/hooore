import { validateRequest } from "@/lib/auth";
import PageEditForm from "./form";
import { redirect } from "next/navigation";
import { getPageContentsByIdRepo } from "@/actions/page.repository";
import type { PageContent } from "@/actions/page.definition";
import type { FuncActionState } from "@/types/result";
import { insertPagePreviewRepo } from "@/actions/preview.repository";
import { validatePreviewSchema } from "@/actions/preview.definition";
import { updatePageContents } from "@/actions/page-content";
import { revalidatePath } from "next/cache";

export default async function PageEditPate(props: {
  params: { projectId: string; pageId: string };
}) {
  const { projectId, pageId } = props.params;
  const { user } = await validateRequest();
  if (!user) {
    return redirect("/login");
  }
  const pageContents = await getPageContentsByIdRepo(
    user.id,
    projectId,
    pageId,
  );

  return (
    <PageEditForm
      projectId={projectId}
      pageId={pageId}
      previewAction={previewAction}
      saveAction={saveAction}
      pageContents={pageContents.success ? pageContents.data : []}
    />
  );
}

async function previewAction(
  pageId: string,
  pageContents: PageContent[],
): Promise<FuncActionState> {
  "use server";

  const { user } = await validateRequest();
  if (!user) {
    return {
      success: false,
      error: "Unauthorized",
    };
  }

  const validatedPreview = validatePreviewSchema({
    id: pageId,
    content: pageContents,
  });
  if (!validatedPreview.success) {
    return {
      success: false,
      error: validatedPreview.error,
    };
  }

  const result = await insertPagePreviewRepo(
    validatedPreview.data.id,
    validatedPreview.data.content,
  );
  if (!result.success) {
    return {
      success: false,
      error: result.error,
    };
  }

  return {
    data: "",
    success: true,
  };
}

async function saveAction(
  projectId: string,
  pageId: string,
  editedDate: Date,
  pageContents: PageContent[],
): Promise<FuncActionState> {
  "use server";

  const { user } = await validateRequest();
  if (!user) {
    return {
      success: false,
      error: "Unauthorized",
    };
  }

  const result = await updatePageContents(
    projectId,
    pageId,
    editedDate,
    pageContents.map((pageContent) => {
      return {
        content: pageContent.content,
        template_content_id: pageContent.template_content_id,
      };
    }),
  );
  if (!result.success) {
    return result;
  }

  revalidatePath("/page/[pageId]", "layout");

  return {
    data: "",
    success: true,
  };
}
