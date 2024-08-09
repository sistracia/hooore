import { validateRequest } from "@/lib/auth";
import PageEditForm from "./form";
import { redirect } from "next/navigation";
import { getPageContentsByIdRepo } from "@/actions/page.repository";
import type { PageContent } from "@/actions/page.definition";
import type { FuncActionState } from "@/types/result";
import { insertPagePreviewRepo } from "@/actions/preview.repository";
import { validatePreviewSchema } from "@/actions/preview.definition";

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
      previewAction={previewAction}
      saveAction={saveAction}
      pageId={pageId}
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

async function saveAction(_: PageContent[]): Promise<FuncActionState> {
  "use server";

  const { user } = await validateRequest();
  if (!user) {
    return {
      success: false,
      error: "Unauthorized",
    };
  }

  return {
    data: "",
    success: true,
  };
}
