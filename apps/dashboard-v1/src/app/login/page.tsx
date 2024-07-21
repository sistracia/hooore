import { loginAction } from "@/actions/auth";
import { AuthFormState } from "@/actions/auth.definition";
import { AuthForm } from "@/components/auth-form";
import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { Label } from "@/components/label";
import { validateRequest } from "@/lib/auth";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function LoginPage() {
  const { user } = await validateRequest();
  if (user) {
    return redirect("/");
  }
  return (
    <main className="dd-flex dd-min-h-dvh dd-flex-col dd-items-center dd-justify-center dd-p-4">
      <div className="dd-w-full dd-max-w-[500px] dd-rounded-lg dd-border dd-p-4">
        <h1 className="dd-mb-4 dd-text-xl">Sign in</h1>
        <AuthForm className="dd-mb-4" action={login}>
          <div className="dd-mb-4">
            <Label htmlFor="username">Username</Label>
            <Input name="username" id="username" />
          </div>
          <div className="dd-mb-4">
            <Label htmlFor="password">Password</Label>
            <Input type="password" name="password" id="password" />
          </div>
          <Button>Continue</Button>
        </AuthForm>
        <Link href="/signup">Create an account</Link>
        <div className="dd-mb-4 dd-flex dd-items-center dd-text-sm">
          <span className="dd-mr-2 dd-h-[1px] dd-w-full dd-bg-slate-200"></span>
          OR
          <span className="dd-ml-2 dd-h-[1px] dd-w-full dd-bg-slate-200"></span>
        </div>
        <a href="/login/github">Sign in with GitHub</a>
      </div>
    </main>
  );
}

async function login(
  _: AuthFormState,
  formData: FormData,
): Promise<AuthFormState> {
  "use server";
  const result = await loginAction(formData);
  if (result.error !== null) {
    return result;
  }

  return redirect("/");
}
