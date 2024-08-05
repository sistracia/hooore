import { getUserProjectRepo } from "@/actions/project.repository";
import { SettingsForm } from "./form";
import { validateRequest } from "@/lib/auth";
import { redirect } from "next/navigation";
import {
  type ProjectState,
  type ProjectSchema,
} from "@/actions/project.definition";

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

async function action(_: ProjectSchema): Promise<ProjectState> {
  "use server";

  const { user } = await validateRequest();
  if (!user) {
    return {
      success: false,
      error: "Unauthorized",
    };
  }

  return {
    data: "",
    success: true,
  };
}
