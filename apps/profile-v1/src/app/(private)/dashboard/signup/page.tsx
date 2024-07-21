import { signupAction } from "@/actions/auth";
import { AuthFormState } from "@/actions/auth.definition";
import { AuthForm } from "@/components/auth-form";
import { validateRequest } from "@/lib/auth";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function SignupPage() {
  const { user } = await validateRequest();
  if (user) {
    return redirect("/");
  }
  return (
    <>
      <h1>Create an account</h1>
      <AuthForm action={signup}>
        <label htmlFor="username">Username</label>
        <input name="username" id="username" />
        <br />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
        <br />
        <button>Continue</button>
      </AuthForm>
      <Link href="/dashboard/login">Sign in</Link>
    </>
  );
}

async function signup(
  _: AuthFormState,
  formData: FormData,
): Promise<AuthFormState> {
  "use server";
  const result = await signupAction(formData);
  if (result.error !== null) {
    return result;
  }

  return redirect("/dashboard");
}
