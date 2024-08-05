"use client";

import { type ProjectState } from "@/actions/project.definition";
import { Input } from "@/components/ui/input";
import { SetupLayout } from "@/components/setup-layout";
import { useState } from "react";
import { useFormState } from "react-dom";

const noop = () => {
  return undefined;
};

export function BusinessNameForm(props: {
  projectId: string;
  action: (state: ProjectState, formData: FormData) => Promise<ProjectState>;
}) {
  const { projectId, action } = props;
  const [businessNameState, businessNameAction] = useFormState(action, {
    projectId,
    success: true,
  });

  const [businessName, setBusinessName] = useState("");
  const businessNameError = !businessNameState.success
    ? businessNameState.error
    : undefined;

  return (
    <form
      className="dd-flex dd-h-full dd-items-center"
      action={businessNameAction}
    >
      <SetupLayout
        className="sm:dd-w-[550px]"
        onNext={noop}
        badge="About"
        title="What is the name of your business?"
        nextButtonText="Next"
        nextButtonDisabled={
          businessName === "" || businessNameError !== undefined
        }
      >
        <div className="dd-w-full sm:dd-w-[360px]">
          <Input
            name="business_name"
            placeholder="Enter your business name"
            value={businessName}
            onChange={(event) => {
              setBusinessName(event.currentTarget.value);
            }}
          />
        </div>
        {businessNameError !== undefined && (
          <p className="dd-my-4 dd-text-red-500">{businessNameError}</p>
        )}
      </SetupLayout>
    </form>
  );
}
