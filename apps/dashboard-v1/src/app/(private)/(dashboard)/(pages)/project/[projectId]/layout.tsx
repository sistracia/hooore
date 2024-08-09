import { SideBar } from "@/components/side-bar";
import { validateRequest } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function DashboardLayout(
  props: Readonly<{
    children: React.ReactNode;
    params: { projectId: string };
  }>,
) {
  const { children, params } = props;
  const projectId = params.projectId;

  const { user } = await validateRequest();
  if (!user) {
    return redirect("/login");
  }

  return (
    <div className="dd-flex dd-h-[calc(100dvh-var(--navbar-height))] dd-w-full">
      <SideBar
        projectId={projectId}
        userName={user.email}
        userEmail={user.email}
      />
      <div className="dd-w-full dd-flex-1 dd-bg-slate-100 dd-p-6">
        {children}
      </div>
    </div>
  );
}
