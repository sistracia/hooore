import { addProject } from "@/actions/project";
import {
  validateProjectFormSchemaForm,
  type ProjectState,
} from "@/actions/project.definition";
import { FirstSetupForm } from "./form";
import { validateRequest } from "@/lib/auth";
import { redirect } from "next/navigation";
import { getTemplates } from "@/actions/template";

export default async function FirstSetupPage() {
  const templates = await getTemplates();

  return <FirstSetupForm action={addProjectAction} templates={templates} />;
}

async function addProjectAction(
  _: ProjectState,
  formData: FormData,
): Promise<ProjectState> {
  "use server";
  const { user } = await validateRequest();
  if (!user) {
    return { success: false, error: "Unauthorized" };
  }

  const validatedProjectForm = validateProjectFormSchemaForm({
    business_logo: formData.get("business_logo"),
    business_name: formData.get("business_name"),
  });

  if (validatedProjectForm.error !== null) {
    return {
      success: false,
      error: validatedProjectForm.error,
    };
  }

  const project = await addProject(user.id, validatedProjectForm.data);
  if (!project.success) {
    return {
      success: false,
      error: project.error,
    };
  }

  return redirect(`/`);
}
