import { loginAction } from "@/actions/auth";
import { AuthFormState } from "@/actions/auth.definition";
import { AuthForm } from "@/components/auth-form";
import { validateRequest } from "@/lib/auth";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function LoginPage() {
  const { user } = await validateRequest();
  if (user) {
    return redirect("/");
  }
  return (
    <>
      <h1>Sign in</h1>
      <AuthForm action={login}>
        <label htmlFor="username">Username</label>
        <input name="username" id="username" />
        <br />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
        <br />
        <button>Continue</button>
      </AuthForm>
      <Link href="/signup">Create an account</Link>
    </>
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
