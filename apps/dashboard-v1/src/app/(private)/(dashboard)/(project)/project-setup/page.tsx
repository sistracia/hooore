import { addProjectAction } from "@/actions/project";
import { type ProjectState } from "@/actions/project.definition";
import { FirstSetupForm } from "./form";
import { validateRequest } from "@/lib/auth";
import { redirect } from "next/navigation";
import { getTemplates } from "@/actions/template";

export default async function FirstSetupPage() {
  const templates = await getTemplates();

  return <FirstSetupForm action={initProject} templates={templates} />;
}

async function initProject(
  _: ProjectState,
  formData: FormData,
): Promise<ProjectState> {
  "use server";
  const { user } = await validateRequest();
  if (!user) {
    return { success: false, error: "Unauthorized" };
  }

  const project = await addProjectAction(user.id, formData);
  if (!project.success) {
    return {
      success: false,
      error: project.error,
    };
  }

  return redirect(`/`);
}
