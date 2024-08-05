import { validateRequest } from "@/lib/auth";
import { redirect } from "next/navigation";
import { ProjectSetupForm } from "./form";
import {
  type ProjectFormSchema,
  projectFormSchema,
  type ProjectState,
} from "@/actions/project.definition";
import { zodErrorStringify } from "@/actions/utils";
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

  const validatedProject = projectFormSchema.safeParse(project);
  if (!validatedProject.success) {
    return {
      success: false,
      error: zodErrorStringify(validatedProject.error),
    };
  }

  const result = await addProject(user.id, validatedProject.data);
  if (!result.success) {
    return {
      success: false,
      error: result.error,
    };
  }

  return {
    success: true,
    projectId: result.projectId,
  };
}
