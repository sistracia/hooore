import { getUserProjectsRepo } from "@/actions/project.repository";
import { validateRequest } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const { user } = await validateRequest();
  if (!user) {
    return redirect("/login");
  }

  const projects = await getUserProjectsRepo(user.id);
  if (projects.success && projects.data.length !== 0) {
    return redirect(`/project/${projects.data[0]?.id}`);
  }

  return redirect("/project-setup");
}
