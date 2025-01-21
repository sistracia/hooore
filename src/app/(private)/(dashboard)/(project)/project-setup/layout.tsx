import { logout } from "@/actions/auth";
import { HoooreLogoBlack } from "@/components/hooore-logo-black";
import { Button } from "@/components/ui/button";
import { validateRequest } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function ProjectSetupLayout(
  props: Readonly<{
    children: React.ReactNode;
  }>
) {
  const { children } = props;

  const { user } = await validateRequest();
  if (!user) {
    return redirect("/login");
  }

  return (
    <>
      <nav className="dd-justify-center-center dd-flex dd-h-[--navbar-height] dd-items-center dd-border-b-2 dd-p-4">
        <HoooreLogoBlack />
        <div className="dd-flex dd-flex-1 dd-flex-col dd-items-end dd-justify-end dd-gap-2 sm:dd-flex-row sm:dd-items-center">
          <span className="dd-text-muted-foreground">{user.email}</span>
          <form action={logoutAction}>
            <Button variant="link">Log Out</Button>
          </form>
        </div>
      </nav>
      <main className="dd-flex dd-h-[calc(100dvh-var(--navbar-height))] dd-items-center dd-overflow-scroll">
        <div className="dd-h-full dd-w-full sm:dd-mx-auto sm:dd-w-fit">
          {children}
        </div>
      </main>
    </>
  );
}

async function logoutAction(): Promise<void> {
  "use server";
  await logout();
  redirect("/login");
}
