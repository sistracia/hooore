import { countUserProjectRepo } from "@/actions/project.repository";
import { SideBar } from "@/components/side-bar";
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

  const projectCount = await countUserProjectRepo(user.id);
  if (projectCount.success && projectCount.data === 0) {
    return redirect("/project-setup");
  }

  return (
    <div className="dd-flex dd-h-[calc(100dvh-var(--navbar-height))] dd-w-full">
      <SideBar userName={user.email} userEmail={user.email} />
      <div className="dd-w-full dd-flex-1 dd-overflow-scroll dd-bg-slate-100 dd-p-6">
        {children}
      </div>
    </div>
  );
}
