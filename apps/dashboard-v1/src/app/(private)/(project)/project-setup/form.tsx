"use client";

import {
  businessLogoSchema,
  businessNameSchema,
  type ProjectState,
} from "@/actions/project.definition";
import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { Label } from "@/components/label";
import { SetupLayout } from "@/components/setup-layout";
import {
  EnvelopeClosedIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
  TrashIcon,
  UploadIcon,
} from "@radix-ui/react-icons";
import { cn } from "@repo/utils";
import { useEffect, useRef, useState } from "react";
import { useFormState } from "react-dom";

function BusinessNameStep({
  className,
  onNext,
  onBack,
}: {
  className?: string;
  onNext?: () => void;
  onBack?: () => void;
}) {
  const [businessName, setBusinessName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const onBusinessNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const parsedBusinessName = businessNameSchema.safeParse(
      event.currentTarget.value,
    );

    const errorMessage =
      parsedBusinessName.error?.flatten().formErrors.join(", ") ?? "";
    const businessName = parsedBusinessName.data ?? "";

    setErrorMessage(errorMessage);
    setBusinessName(businessName);
  };

  return (
    <SetupLayout
      className={className}
      onBack={onBack}
      onNext={onNext}
      badge="About"
      title="What is the name of your business?"
      nextButtonText="Next"
      nextButtonType="button"
      nextButtonDisabled={businessName === "" || errorMessage !== ""}
    >
      <div className="dd-w-full sm:dd-w-[360px]">
        <Input
          name="business_name"
          placeholder="Enter your business name"
          onChange={onBusinessNameChange}
        />
      </div>
      {errorMessage !== "" && (
        <p className="dd-my-4 dd-text-red-500">{errorMessage}</p>
      )}
    </SetupLayout>
  );
}

function BusinessLogoStep({
  className,
  onNext,
  onBack,
}: {
  className?: string;
  onNext?: () => void;
  onBack?: () => void;
}) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [businessLogo, setBusinessLogo] = useState<FileList | null>(null);
  const [errorMessage, setErrorMessage] = useState("");

  const businessLogoFile = businessLogo !== null ? businessLogo[0] : undefined;
  const imagePreview =
    businessLogoFile !== undefined
      ? URL.createObjectURL(businessLogoFile)
      : null;

  const onBusinessLogoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (
      event.currentTarget.files !== null &&
      event.currentTarget.files[0] !== undefined
    ) {
      const parsedBusinessLogo = businessLogoSchema.safeParse(
        event.currentTarget.files[0],
      );

      const errorMessages: string[] = [];

      const sizeError = parsedBusinessLogo.error?.flatten().fieldErrors.size;
      if (sizeError) {
        errorMessages.push(sizeError.join(","));
      }

      const typeError = parsedBusinessLogo.error?.flatten().fieldErrors.type;
      if (typeError) {
        errorMessages.push(typeError.join(","));
      }

      setErrorMessage(errorMessages.join(", "));
      setBusinessLogo(event.currentTarget.files);
      return;
    }

    event.currentTarget.files = businessLogo;
  };

  return (
    <SetupLayout
      className={className}
      onBack={onBack}
      onNext={onNext}
      badge="About"
      title="Do you have logo for your business?"
      nextButtonText="Next"
      nextButtonType="button"
      nextButtonDisabled={errorMessage !== ""}
    >
      <div className="dd-flex dd-h-[40px] dd-gap-2">
        {imagePreview !== null && (
          <img
            src={imagePreview}
            className="dd-h-full dd-w-[40px] dd-rounded-md dd-border"
            onLoad={() => {
              URL.revokeObjectURL(imagePreview);
            }}
          />
        )}
        <Label className="dd-flex dd-h-full dd-flex-1 dd-items-center dd-justify-between dd-rounded-md dd-border dd-px-3 dd-py-2">
          <span
            className={cn(
              "dd-flex-1",
              businessLogoFile === undefined && "dd-text-slate-500",
            )}
          >
            {businessLogoFile === undefined
              ? "Choose File"
              : businessLogoFile.name}
          </span>
          <UploadIcon className="dd-h-4 dd-w-4" />
          <Input
            name="business_logo"
            type="file"
            className="dd-hidden"
            ref={fileInputRef}
            onChange={onBusinessLogoChange}
          />
        </Label>
        {imagePreview !== null && (
          <Button
            type="button"
            variant="outline"
            size="icon"
            className="dd-h-full dd-w-[40px]"
            onClick={() => {
              if (fileInputRef.current) {
                fileInputRef.current.value = "";
              }
              setBusinessLogo(null);
            }}
          >
            <TrashIcon className="dd-h-4 dd-w-4" />
          </Button>
        )}
      </div>
      {errorMessage !== "" && (
        <p className="dd-my-4 dd-text-red-500">{errorMessage}</p>
      )}
    </SetupLayout>
  );
}

function SocialNetworkStep({
  className,
  onNext,
  onBack,
}: {
  className?: string;
  onNext?: () => void;
  onBack?: () => void;
}) {
  return (
    <SetupLayout
      className={className}
      onBack={onBack}
      onNext={onNext}
      badge="Social Network"
      title="How people contact you?"
      nextButtonText="Save & Proceed"
      nextButtonType="submit"
    >
      <div className="dd-w-full sm:dd-w-[360px]">
        <div className="dd-mb-3 dd-flex dd-items-center">
          <EnvelopeClosedIcon className="dd-mr-3 dd-h-8 dd-w-8" />
          <Input name="social_email" placeholder="enter your email" />
        </div>
        <div className="dd-mb-3 dd-flex dd-items-center">
          <LinkedInLogoIcon className="dd-mr-3 dd-h-8 dd-w-8" />
          <Input name="social_linkedin" placeholder="@username" />
        </div>
        <div className="dd-mb-3 dd-flex dd-items-center">
          <InstagramLogoIcon className="dd-mr-3 dd-h-8 dd-w-8" />
          <Input name="social_instagram" placeholder="@username" />
        </div>
      </div>
    </SetupLayout>
  );
}

export function FirstSetupForm({
  action,
}: {
  action: (
    prevState: ProjectState,
    formData: FormData,
  ) => Promise<ProjectState>;
}) {
  const [setupError, setupAction] = useFormState(action, {
    error: null,
  });

  const [step, setStep] = useState(1);

  const onNext = () => {
    if (step === 3) {
      return;
    }

    setStep(step + 1);
  };

  const onBack = () => {
    if (step === 1) {
      return;
    }
    setStep(step - 1);
  };

  useEffect(() => {
    console.log(setupError);
  }, [setupError]);

  return (
    <main className="dd-flex dd-min-h-[calc(100dvh-var(--navbar-height))] dd-items-center dd-p-4">
      <form className="dd-mx-auto" action={setupAction}>
        <BusinessNameStep
          onNext={onNext}
          className={step === 1 ? "dd-block" : "dd-hidden"}
        />
        <BusinessLogoStep
          onNext={onNext}
          onBack={onBack}
          className={step === 2 ? "dd-block" : "dd-hidden"}
        />
        <SocialNetworkStep
          onNext={onNext}
          onBack={onBack}
          className={step === 3 ? "dd-block" : "dd-hidden"}
        />
      </form>
    </main>
  );
}
