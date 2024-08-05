import { validateRequest } from "@/lib/auth";
import { redirect } from "next/navigation";
import { ProjectSetupForm } from "./form";
import {
  type ProjectFormSchema,
  type ProjectState,
  validateProjectFormSchema,
} from "@/actions/project.definition";
import { addProject } from "@/actions/project";

export default async function ProjectSetupPage() {
  const { user } = await validateRequest();
  if (!user) {
    return redirect("/login");
  }

  return <ProjectSetupForm action={action} redirect="/" />;
}

async function action(project: ProjectFormSchema): Promise<ProjectState> {
  "use server";

  const { user } = await validateRequest();
  if (!user) {
    return {
      success: false,
      error: "Unauthorized",
    };
  }

  const validatedProject = validateProjectFormSchema(project);
  if (!validatedProject.success) {
    return {
      success: false,
      error: validatedProject.error,
    };
  }

  const result = await addProject(user.id, validatedProject.data);
  if (!result.success) {
    return {
      success: false,
      error: result.error,
    };
  }

  return result;
}
