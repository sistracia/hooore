import { generateProjectId } from "@/actions/project";
import { validateRequest } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function ProjectSetupPage() {
  const { user } = await validateRequest();
  if (!user) {
    return { success: false, error: "Unauthorized" };
  }

  const projectId = await generateProjectId(user.id);

  return redirect(`/project-setup/${projectId}/step-1`);
}
