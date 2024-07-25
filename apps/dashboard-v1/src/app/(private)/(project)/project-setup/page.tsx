import { addProjectAction } from "@/actions/project";
import { type ProjectState } from "@/actions/project.definition";
import { FirstSetupForm } from "./form";
import { validateRequest } from "@/lib/auth";
import { redirect } from "next/navigation";

export default function FirstSetupPage() {
  return <FirstSetupForm action={initProject} />;
}

async function initProject(
  _: ProjectState,
  formData: FormData,
): Promise<ProjectState> {
  "use server";
  const { user } = await validateRequest();
  if (!user) {
    return { error: "Unauthorized" };
  }
  const { error } = await addProjectAction(user.id, formData);
  if (error) {
    return {
      error,
    };
  }

  return redirect("/");
}
