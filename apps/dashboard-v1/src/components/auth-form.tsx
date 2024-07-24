"use client";

import { AuthFormState } from "@/actions/auth.definition";
import { useFormState } from "react-dom";

export type AuthFormProps = {
  children: React.ReactNode;
  action: (
    prevState: AuthFormState,
    formData: FormData,
  ) => Promise<AuthFormState>;
  className?: string;
};

export function AuthForm({ action, children, className }: AuthFormProps) {
  const [state, formAction] = useFormState(action, {
    error: null,
  });

  return (
    <form action={formAction} className={className}>
      {children}
      <p className="dd-my-4 dd-text-red-500">{state.error}</p>
    </form>
  );
}
