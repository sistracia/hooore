import { updateProject } from "@/actions/project";
import {
  type ProjectSettingSchema,
  validateProjectSettingSchema,
} from "@/actions/project.definition";
import { getUserProjectRepo } from "@/actions/project.repository";
import { validateRequest } from "@/lib/auth";
import type { FuncActionState } from "@/types/result";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { SettingsForm } from "./form";

export default async function SettingsPage(
  props: Readonly<{
    params: Promise<{ projectId: string }>;
  }>
) {
  const params = await props.params;
  const projectId = params.projectId;

  const { user } = await validateRequest();
  if (!user) {
    return redirect("/login");
  }

  const userProject = await getUserProjectRepo(projectId, user.id);
  if (!userProject.success || userProject.data === undefined) {
    return redirect("/project-setup");
  }

  const projectSetting: ProjectSettingSchema = {
    business_name: userProject.data.business_name,
    business_logo: userProject.data.business_logo,
    title: userProject.data.title,
    description: userProject.data.description,
    favico: userProject.data.favico,
    custom_domain: userProject.data.custom_domain,
  };

  return (
    <SettingsForm
      projectSetting={projectSetting}
      action={action.bind(null, projectId)}
    />
  );
}

async function action(
  projectId: string,
  project: ProjectSettingSchema
): Promise<FuncActionState> {
  "use server";

  const { user } = await validateRequest();
  if (!user) {
    return {
      success: false,
      error: "Unauthorized",
    };
  }

  const validatedProject = validateProjectSettingSchema(project);
  if (!validatedProject.success) {
    return {
      success: false,
      error: validatedProject.error,
    };
  }

  const result = await updateProject(projectId, validatedProject.data);
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
