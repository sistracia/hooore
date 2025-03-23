import { addProject } from "@/actions/project";
import {
  type ProjectFormSchema,
  validateProjectFormSchema,
} from "@/actions/project.definition";
import {
  getTemplatesRepo,
  getUserProjectsRepo,
} from "@/actions/project.repository";
import { getCurrentSession } from "@/lib/session";
import type { FuncActionState } from "@/types/result";
import { redirect } from "next/navigation";
import { ProjectSetupForm } from "./form";

export default async function ProjectSetupPage() {
  const { session } = await getCurrentSession();
  if (!session) {
    return redirect("/login");
  }

  const projects = await getUserProjectsRepo(session.userId);
  if (projects.success && projects.data.length > 0) {
    return redirect("/");
  }

  const templates = await getTemplatesRepo();

  return (
    <ProjectSetupForm
      action={action}
      redirect="/"
      templates={templates.success ? templates.data : []}
      domain={process.env.MAIN_HOST_DOMAIN}
    />
  );
}

async function action(project: ProjectFormSchema): Promise<FuncActionState> {
  "use server";

  const { session } = await getCurrentSession();
  if (!session) {
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

  const result = await addProject(session.userId, validatedProject.data);
  if (!result.success) {
    return {
      success: false,
      error: result.error,
    };
  }

  return result;
}
