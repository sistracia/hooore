"use client";

import { type ProjectState } from "@/actions/project.definition";
import { Label } from "@/components/ui/label";
import { SetupLayout } from "@/components/setup-layout";
import { useFormState } from "react-dom";
import { InputFile } from "@/components/input-file";
import { useState } from "react";
import { useRouter } from "next/navigation";

const noop = () => {
  return undefined;
};

export function BusinessLogoForm(props: {
  projectId: string;
  action: (state: ProjectState, formData: FormData) => Promise<ProjectState>;
}) {
  const router = useRouter();

  const { projectId, action } = props;
  const [businessLogoState, businessLogoAction] = useFormState(action, {
    projectId,
    success: true,
  });

  const [businessLogo, setBusinessLogo] = useState<string>();
  const businessLogoError = !businessLogoState.success
    ? businessLogoState.error
    : undefined;

  return (
    <form
      className="dd-flex dd-h-full dd-items-center"
      action={(formData) => {
        if (businessLogo) {
          formData.set("business_logo", businessLogo);
        }
        businessLogoAction(formData);
      }}
    >
      <SetupLayout
        className="sm:dd-w-[550px]"
        onBack={() => {
          router.back();
        }}
        onNext={noop}
        badge="About"
        title="Do you have logo for your business?"
        nextButtonText="Create Project"
        nextButtonDisabled={businessLogoError !== undefined}
      >
        <Label>
          <InputFile value={businessLogo} onChange={setBusinessLogo} />
        </Label>
        {businessLogoError !== undefined && (
          <p className="dd-my-4 dd-text-red-500">{businessLogoError}</p>
        )}
      </SetupLayout>
    </form>
  );
}
