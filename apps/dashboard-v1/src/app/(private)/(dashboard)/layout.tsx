import { logoutAction } from "@/actions/auth";
import { AuthFormState } from "@/actions/auth.definition";
import { AuthForm } from "@/components/auth-form";
import { Button } from "@/components/ui/button";
import { HoooreLogoBlack } from "@/components/hooore-logo-black";
import { validateRequest } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function PrivateLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { user } = await validateRequest();
  if (!user) {
    return redirect("/login");
  }

  return (
    <>
      <nav className="dd-justify-center-center dd-flex dd-h-[--navbar-height] dd-items-center dd-border-b-2 dd-p-4">
        <HoooreLogoBlack />
        <div className="dd-flex dd-flex-1 dd-flex-col dd-items-end dd-justify-end sm:dd-flex-row sm:dd-items-center">
          <span className="dd-text-muted-foreground">{user.email}</span>
          <AuthForm action={logout} withErrorText={false}>
            <Button variant="link">Log Out</Button>
          </AuthForm>
        </div>
      </nav>
      {children}
    </>
  );
}

async function logout(): Promise<AuthFormState> {
  "use server";
  await logoutAction();
  return redirect("/login");
}
