"use client";

import { AuthFormState } from "@/actions/auth.definition";
import { useFormState } from "react-dom";

export type AuthFormProps = {
  children: React.ReactNode;
  action: (
    prevState: AuthFormState,
    formData: FormData,
  ) => Promise<AuthFormState>;
};

export function AuthForm({ action, children }: AuthFormProps) {
  const [state, formAction] = useFormState(action, {
    error: null,
  });

  return (
    <form action={formAction}>
      {children}
      <p>{state.error}</p>
    </form>
  );
}
