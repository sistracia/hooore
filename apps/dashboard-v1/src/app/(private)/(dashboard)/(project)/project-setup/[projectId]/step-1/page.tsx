import {
  projectFormStep1Schema,
  type ProjectState,
} from "@/actions/project.definition";
import { redirect } from "next/navigation";
import { validateRequest } from "@/lib/auth";
import { BusinessNameForm } from "./form";
import { checkProjectId, setProjectCache } from "@/actions/project";
import { zodErrorStringify } from "@/actions/utils";

export default async function BusinessNameStep(props: {
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

  return <BusinessNameForm projectId={projectId} action={action} />;
}

async function action(
  projectState: ProjectState,
  formData: FormData,
): Promise<ProjectState> {
  "use server";
  const projectId = projectState.projectId;

  const { user } = await validateRequest();
  if (!user) {
    return {
      projectId: projectId,
      success: false,
      error: "Unauthorized",
    };
  }

  const validatedStep1 = projectFormStep1Schema.safeParse({
    business_name: formData.get("business_name"),
  });
  if (!validatedStep1.success) {
    return {
      projectId,
      success: false,
      error: zodErrorStringify(validatedStep1.error),
    };
  }

  const { business_name } = validatedStep1.data;
  await setProjectCache(user.id, projectId, {
    business_name,
  });

  return redirect(`/project-setup/${projectId}/step-2`);
}
