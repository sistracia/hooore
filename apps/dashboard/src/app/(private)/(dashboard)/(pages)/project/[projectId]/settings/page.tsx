import { getUserProjectRepo } from "@/actions/project.repository";
import { SettingsForm } from "./form";
import { validateRequest } from "@/lib/auth";
import { redirect } from "next/navigation";
import {
  type ProjectSettingSchema,
  validateProjectSettingSchema,
} from "@/actions/project.definition";
import { updateProject } from "@/actions/project";
import type { FuncActionState } from "@/types/result";
import { revalidatePath } from "next/cache";
import { getMetaByProjectIdRepo } from "@/actions/project-meta.repository";

export default async function SettingsPage(
  props: Readonly<{
    params: { projectId: string };
  }>,
) {
  const { params } = props;
  const projectId = params.projectId;

  const { user } = await validateRequest();
  if (!user) {
    return redirect("/login");
  }

  const [userProject, _metas] = await Promise.all([
    getUserProjectRepo(projectId, user.id),
    getMetaByProjectIdRepo(projectId),
  ]);
  if (!userProject.success || userProject.data === undefined) {
    return redirect("/project-setup");
  }

  const metas = _metas.success ? _metas.data : [];

  const titleMeta = metas.find((meta) => {
    return meta.type === "title";
  });

  const descriptionMeta = metas.find((meta) => {
    return meta.type === "description";
  });

  const favicoMeta = metas.find((meta) => {
    return meta.type === "favico";
  });

  const projectSetting: ProjectSettingSchema = {
    business_name: userProject.data.business_name,
    business_logo: userProject.data.business_logo,
    metas: [
      {
        title: titleMeta?.content || "",
        description: descriptionMeta?.content || "",
        favico: favicoMeta?.content || "",
      },
    ],
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
  project: ProjectSettingSchema,
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
