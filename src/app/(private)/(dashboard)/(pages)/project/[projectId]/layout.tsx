import { logout } from "@/actions/auth";
import { publishProject } from "@/actions/project";
import { getUserProjectRepo } from "@/actions/project.repository";
import { HoooreLogoBlack } from "@/components/hooore-logo-black";
import { PublishProgress } from "@/components/publish-progress";
import { SideBar } from "@/components/side-bar";
import { Button } from "@/components/ui/button";
import { validateRequest } from "@/lib/auth";
import type { FuncActionState } from "@/types/result";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import {} from "react";

export default async function DashboardLayout(
  props: Readonly<{
    children: React.ReactNode;
    params: Promise<{ projectId: string }>;
  }>
) {
  const params = await props.params;
  const projectId = params.projectId;

  const { user } = await validateRequest();
  if (!user) {
    return redirect("/login");
  }

  const userProject = await getUserProjectRepo(projectId, user.id, true);
  if (!userProject.success || !userProject.data) {
    return redirect("/project-setup");
  }

  const projectUrl = `https://${userProject.data.domain}.${process.env.MAIN_HOST_DOMAIN}`;

  return (
    <>
      <nav className="dd-border-b-2">
        <div className="dd-justify-center-center dd-flex dd-h-[--navbar-height] dd-items-center dd-p-4">
          <HoooreLogoBlack />
          <div className="dd-flex dd-flex-1 dd-flex-col dd-items-end dd-justify-end dd-gap-2 sm:dd-flex-row sm:dd-items-center">
            <a
              className="dd-text-muted-foreground"
              href={projectUrl}
              target="_blank"
              rel="noreferrer noopener"
            >
              {projectUrl}
            </a>
            <form action={publishProjectAction.bind(null, projectId)}>
              <Button disabled={!userProject.data.need_publish}>
                Publish Website
              </Button>
            </form>
          </div>
        </div>
        <PublishProgress
          userId={user.id}
          projectId={projectId}
          wsURL={`${process.env.GENERATOR_LISTENER_URL}/ws`}
        />
      </nav>
      <div className="dd-flex dd-h-[calc(100dvh-var(--navbar-height))] dd-w-full">
        <SideBar
          projectId={projectId}
          userName={user.email}
          userEmail={user.email}
          onLogout={logoutAction}
        />
        <div className="dd-w-full dd-flex-1 dd-bg-slate-100 dd-p-6">
          {props.children}
        </div>
      </div>
    </>
  );
}

async function publishProjectAction(projectId: string): Promise<void> {
  "use server";
  const result = await publishProject(projectId);
  if (!result.success) {
    return;
  }

  revalidatePath("/project/[projectId]", "layout");
  return;
}

async function logoutAction(): Promise<FuncActionState> {
  "use server";
  await logout();
  return redirect("/login");
}
