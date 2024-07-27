import { loginAction } from "@/actions/auth";
import { AuthFormState } from "@/actions/auth.definition";
import { AuthForm } from "@/components/auth-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { redirect } from "next/navigation";
import { GlobeIcon } from "@radix-ui/react-icons";
import { HoooreLogoWhite } from "@/components/hooore-logo-white";

export default async function LogInPage() {
  return (
    <main className="dd-flex dd-min-h-dvh dd-items-stretch dd-justify-center">
      <div className="dd-hidden dd-flex-1 dd-items-center dd-justify-center dd-bg-primary sm:dd-flex">
        <HoooreLogoWhite />
      </div>
      <div className="dd-flex dd-flex-1 dd-items-center dd-justify-center dd-p-4">
        <div className="dd-w-full dd-max-w-[500px] dd-rounded-lg dd-border dd-p-4">
          <h1 className="dd-mb-2 dd-text-2xl dd-font-semibold">Log In</h1>
          <p className="dd-mb-6 dd-text-slate-500">
            Enter your email below to login to your account.
          </p>
          <AuthForm className="dd-mb-4" action={login}>
            <div className="dd-mb-4">
              <Label htmlFor="email">Email</Label>
              <Input
                name="email"
                id="email"
                type="email"
                className="dd-mt-2"
                placeholder="me@example.com"
              />
            </div>
            <div className="dd-mb-4">
              <Label htmlFor="password">Password</Label>
              <Input
                type="password"
                name="password"
                id="password"
                className="dd-mt-2"
                placeholder="******"
              />
            </div>
            <Button className="dd-w-full">Log In</Button>
          </AuthForm>
          <div className="dd-my-6 dd-text-center dd-text-sm">
            <span>Don&apos;t have an account? </span>
            <Link className="dd-font-semibold" href="/signup">
              Sign up
            </Link>
          </div>
          <div className="dd-mb-4 dd-flex dd-items-center dd-text-sm">
            <span className="dd-mr-2 dd-h-[1px] dd-w-full dd-flex-1 dd-bg-slate-200"></span>
            <span className="dd-flex-1 dd-text-sm dd-text-slate-500">
              OR CONTINUE WITH
            </span>
            <span className="dd-ml-2 dd-h-[1px] dd-w-full dd-flex-1 dd-bg-slate-200"></span>
          </div>
          <div className="dd-flex dd-flex-col">
            <Button asChild variant="outline">
              <a href="/login/google">
                <GlobeIcon className="dd-mr-2 dd-h-4 dd-w-4" />
                Google
              </a>
            </Button>
          </div>
        </div>
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
