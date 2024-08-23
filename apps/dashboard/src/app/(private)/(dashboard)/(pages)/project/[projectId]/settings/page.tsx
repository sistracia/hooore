import { getUserProjectRepo } from "@/actions/project.repository";
import { SettingsForm } from "./form";
import { validateRequest } from "@/lib/auth";
import { redirect } from "next/navigation";
import {
  type PublicProjectSchema,
  validatePublicProjectSchema,
} from "@/actions/project.definition";
import { updateProject } from "@/actions/project";
import type { FuncActionState } from "@/types/result";
import { revalidatePath } from "next/cache";

export default async function SettingsPage(
  props: Readonly<{
    children: React.ReactNode;
    params: { projectId: string };
  }>,
) {
  const { params } = props;
  const projectId = params.projectId;

  const { user } = await validateRequest();
  if (!user) {
    return redirect("/login");
  }

  const userProject = await getUserProjectRepo(projectId, user.id);
  if (!userProject.success || userProject.data === undefined) {
    return redirect("/project-setup");
  }

  return <SettingsForm project={userProject.data} action={action} />;
}

async function action(project: PublicProjectSchema): Promise<FuncActionState> {
  "use server";

  const { user } = await validateRequest();
  if (!user) {
    return {
      success: false,
      error: "Unauthorized",
    };
  }

  const validatedProject = validatePublicProjectSchema(project);
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
