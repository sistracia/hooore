import {
  projectFormStep2Schema,
  type ProjectState,
} from "@/actions/project.definition";

import { validateRequest } from "@/lib/auth";
import { redirect } from "next/navigation";
import { BusinessLogoForm } from "./form";
import { addProject, checkProjectId, setProjectCache } from "@/actions/project";
import { zodErrorStringify } from "@/actions/utils";

export default async function BusinessLogoStep(props: {
  params: { projectId: string };
}) {
  const projectId = props.params.projectId;

  const { user } = await validateRequest();
  if (!user) {
    return { success: false, error: "Unauthorized" };
  }

  const isValidProject = await checkProjectId(user.id, projectId);
  if (!isValidProject) {
    return redirect(`/project-setup`);
  }

  return <BusinessLogoForm projectId={projectId} action={action} />;
}

async function action(
  projectState: ProjectState,
  formData: FormData,
): Promise<ProjectState> {
  "use server";
  const projectId = projectState.projectId;

  const { user } = await validateRequest();
  if (!user) {
    return { projectId, success: false, error: "Unauthorized" };
  }

  const validatedStep2 = projectFormStep2Schema.safeParse({
    business_logo: formData.get("business_logo") || "",
  });
  if (!validatedStep2.success) {
    return {
      projectId,
      success: false,
      error: zodErrorStringify(validatedStep2.error),
    };
  }

  const { business_logo } = validatedStep2.data;
  const projectData = await setProjectCache(user.id, projectId, {
    business_logo,
  });

  if (projectData.error) {
    return {
      projectId,
      success: false,
      error: projectData.error,
    };
  }

  const newProjectState = await addProject(user.id, projectId);
  if (!newProjectState.success) {
    return {
      projectId,
      success: false,
      error: newProjectState.error,
    };
  }

  return redirect(`/`);
}
