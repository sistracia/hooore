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
  withErrorText?: boolean;
};

export function AuthForm({
  action,
  children,
  className,
  withErrorText = true,
}: AuthFormProps) {
  const [state, formAction] = useFormState(action, {
    error: null,
  });

  return (
    <form action={formAction} className={className}>
      {children}
      {withErrorText && (
        <p className="dd-my-4 dd-text-red-500">{state.error}</p>
      )}
    </form>
  );
}
