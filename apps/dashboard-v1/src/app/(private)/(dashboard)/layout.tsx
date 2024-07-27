import { countUserProjectAction } from "@/actions/project";
import { validateRequest } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { user } = await validateRequest();
  if (!user) {
    return redirect("/login");
  }

  const userProjectCount = await countUserProjectAction(user.id);
  if (userProjectCount === 0) {
    return redirect("/project-setup");
  }

  return children;
}
