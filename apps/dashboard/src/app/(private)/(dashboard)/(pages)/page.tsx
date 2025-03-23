import { getUserProjectsRepo } from "@/actions/project.repository";
import { getCurrentSession } from "@/lib/session";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const { session } = await getCurrentSession();
  if (!session) {
    return redirect("/login");
  }

  const projects = await getUserProjectsRepo(session.userId);
  if (projects.success && projects.data.length !== 0) {
    return redirect(`/project/${projects.data[0]?.id}`);
  }

  return redirect("/project-setup");
}
