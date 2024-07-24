import { logoutAction } from "@/actions/auth";
import { AuthFormState } from "@/actions/auth.definition";
import { AuthForm } from "@/components/auth-form";
import { validateRequest } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const { user } = await validateRequest();
  if (!user) {
    return redirect("/login");
  }
  return (
    <>
      <h1>Hi, {user.email}!</h1>
      <p>Your user ID is {user.id}.</p>
      <AuthForm action={logout}>
        <button>Sign out</button>
      </AuthForm>
    </>
  );
}

async function logout(): Promise<AuthFormState> {
  "use server";
  await logoutAction();
  return redirect("/login");
}
