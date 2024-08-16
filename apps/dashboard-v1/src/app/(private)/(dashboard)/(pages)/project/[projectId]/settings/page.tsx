import { getUserProjectRepo } from "@/actions/project.repository";
import { SettingsForm } from "./form";
import { validateRequest } from "@/lib/auth";
import { redirect } from "next/navigation";
import {
  type ProjectSchema,
  validateProjectSchema,
} from "@/actions/project.definition";
import { updateProject } from "@/actions/project";
import type { FuncActionState } from "@/types/result";
import { revalidatePath } from "next/cache";

export default async function SettingsPage() {
  const { user } = await validateRequest();
  if (!user) {
    return redirect("/login");
  }

  const userProject = await getUserProjectRepo(user.id);
  if (!userProject.success || userProject.data === undefined) {
    return redirect("/project-setup");
  }

  return <SettingsForm project={userProject.data} action={action} />;
}

async function action(project: ProjectSchema): Promise<FuncActionState> {
  "use server";

  const { user } = await validateRequest();
  if (!user) {
    return {
      success: false,
      error: "Unauthorized",
    };
  }

  const validatedProject = validateProjectSchema(project);

  if (!validatedProject.success) {
    return {
      success: false,
      error: validatedProject.error,
    };
  }

  const result = await updateProject(project.id, validatedProject.data);
  if (!result.success) {
    return {
      success: false,
      error: result.error,
    };
  }

  revalidatePath("/project/[projectId]", "layout");
  return {
    data: "",
    success: true,
  };
}
