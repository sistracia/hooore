"use client";

import {
  businessLogoSchema,
  businessNameSchema,
  type ProjectState,
} from "@/actions/project.definition";
import { TemplateSchema } from "@/actions/template.definition";
import { Button } from "@/components/ui/button";
import { ComingSoonOverlay } from "@/components/coming-soon-overlay";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SetupLayout } from "@/components/setup-layout";
import {
  TemplatePreview,
  TemplatePreviewProps,
} from "@/components/template-preview";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { cn } from "@repo/utils";
import { useEffect, useRef, useState } from "react";
import { createPortal, useFormState } from "react-dom";
import { toast } from "@/components/ui/use-toast";
import { Card } from "@/components/card";
import { InputFile } from "@/components/input-file";
import { SocialMediaFields } from "@/components/social-media-fields";

function BusinessNameStep(props: {
  className?: string;
  onNext?: () => void;
  onBack?: () => void;
}) {
  const { className, onNext, onBack } = props;
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
    <div className={cn(className, "dd-flex dd-h-full dd-items-center")}>
      <SetupLayout
        className="sm:dd-w-[550px]"
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
    </div>
  );
}

function BusinessLogoStep(props: {
  className?: string;
  onNext?: () => void;
  onBack?: () => void;
}) {
  const { className, onNext, onBack } = props;
  const [errorMessage, setErrorMessage] = useState("");

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
      return;
    }
  };

  return (
    <div className={cn(className, "dd-flex dd-h-full dd-items-center")}>
      <SetupLayout
        className="sm:dd-w-[550px]"
        onBack={onBack}
        onNext={onNext}
        badge="About"
        title="Do you have logo for your business?"
        nextButtonText="Next"
        nextButtonType="button"
        nextButtonDisabled={errorMessage !== ""}
      >
        <Label>
          <InputFile name="business_logo" onChange={onBusinessLogoChange} />
        </Label>
        {errorMessage !== "" && (
          <p className="dd-my-4 dd-text-red-500">{errorMessage}</p>
        )}
      </SetupLayout>
    </div>
  );
}

function SocialNetworkStep(props: {
  className?: string;
  onNext?: () => void;
  onBack?: () => void;
}) {
  const { className, onNext, onBack } = props;
  return (
    <div className={cn(className, "dd-flex dd-h-full dd-items-center")}>
      <SetupLayout
        className="sm:dd-w-[550px]"
        onBack={onBack}
        onNext={onNext}
        badge="Social Network"
        title="How people contact you?"
        nextButtonText="Save & Proceed"
        nextButtonType="button"
      >
        <SocialMediaFields />
      </SetupLayout>
    </div>
  );
}

function ProjectTemplateStep(props: {
  className?: string;
  onNext?: () => void;
  onBack?: () => void;
}) {
  const { className, onNext, onBack } = props;
  return (
    <div className={cn(className, "dd-flex dd-h-full dd-items-center")}>
      <SetupLayout
        className="sm:dd-w-[550px]"
        onBack={onBack}
        badge="Social Network"
        title="Choose how to design your site"
      >
        <div className="dd-w-full">
          <Card className="dd-mb-3 dd-flex dd-items-center">
            <div className="dd-flex-1">
              <span className="dd-block dd-text-lg dd-font-semibold">
                Start from template
              </span>
              <span className="dd-text-muted-foreground">
                Create your site from popular design.
              </span>
            </div>
            <Button
              type="button"
              variant="outline"
              size="icon"
              className="dd-mr-2"
              onClick={onNext}
            >
              <ArrowRightIcon className="dd-h-5 dd-w-5" />
            </Button>
          </Card>
          <ComingSoonOverlay
            as={Card}
            className="dd-mb-3 dd-flex dd-items-center"
          >
            <div className="dd-flex-1">
              <span className="dd-block dd-text-lg dd-font-semibold">
                Start from blank canvas
              </span>
              <span className="dd-text-muted-foreground">
                Turn your business idea into lovely site.
              </span>
            </div>
            <Button
              type="submit"
              variant="outline"
              size="icon"
              className="dd-mr-2"
            >
              <ArrowRightIcon className="dd-h-5 dd-w-5" />
            </Button>
          </ComingSoonOverlay>
        </div>
      </SetupLayout>
    </div>
  );
}

function TemplateOptionCard(props: {
  name: string;
  comingSoon?: boolean;
  thumbnailUrl?: string;
  onPreview?: () => void;
}) {
  const { name, comingSoon, thumbnailUrl, onPreview } = props;

  const Wrapper = comingSoon ? ComingSoonOverlay : "div";

  return (
    <Wrapper className="dd-rounded-lg dd-border">
      <div className="dd-h-[400px] dd-border-b dd-p-6">
        {thumbnailUrl ? (
          <div className="dd-group dd-relative dd-overflow-hidden dd-rounded-md">
            <img
              className="dd-h-full dd-w-full dd-object-none"
              src={thumbnailUrl}
              alt={`${name} Thumbnail`}
            />
            <div className="dd-absolute dd-left-0 dd-top-0 dd-hidden dd-h-full dd-w-full dd-items-center dd-justify-center dd-bg-black/50 group-hover:dd-flex">
              <Button type="button" variant="secondary" onClick={onPreview}>
                Preview
              </Button>
            </div>
          </div>
        ) : (
          <div className="dd-h-full dd-w-full dd-rounded-md dd-bg-black dd-p-2"></div>
        )}
      </div>
      <div className="dd-p-6">
        <span className="dd-text-lg dd-font-semibold">{name}</span>
      </div>
    </Wrapper>
  );
}

function TemplateOptionsStep(props: {
  className?: string;
  templates: TemplateSchema[];
  onPreview?: (template: TemplateSchema) => void;
}) {
  const { className, templates, onPreview } = props;

  return (
    <SetupLayout
      className={cn(className, "sm:dd-w-[740px]")}
      badge="Template"
      title="Choose a template"
      stickyHeader
    >
      <div className="dd-grid dd-grid-cols-1 dd-gap-6 sm:dd-grid-cols-2">
        {templates.map((template) => {
          return (
            <TemplateOptionCard
              key={template.id}
              name={template.name}
              thumbnailUrl={template.thumbnail_url}
              onPreview={() => {
                onPreview?.(template);
              }}
            />
          );
        })}
        <TemplateOptionCard comingSoon name="Company Profile X" />
        <TemplateOptionCard comingSoon name="Company Profile Y" />
        <TemplateOptionCard comingSoon name="Company Profile Z" />
      </div>
    </SetupLayout>
  );
}

function PreviewModal(props: TemplatePreviewProps) {
  return (
    <div className="dd-absolute dd-left-0 dd-top-0 dd-z-50 dd-h-full dd-w-full">
      <TemplatePreview {...props} />
    </div>
  );
}

export function FirstSetupForm(props: {
  templates: TemplateSchema[];
  action: (
    prevState: ProjectState,
    formData: FormData,
  ) => Promise<ProjectState>;
}) {
  const { action, templates } = props;
  const [setupState, setupAction] = useFormState(action, {
    success: true,
    projectId: "",
  });

  const portalRef = useRef<HTMLDivElement>(null);

  const [templatePreview, setTemplatePreview] = useState<TemplateSchema | null>(
    null,
  );

  const [step, setStep] = useState(1);

  const onNext = () => {
    if (step === 5) {
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
    if (setupState.success) {
      return;
    }

    toast({
      description: setupState.error,
    });
  }, [setupState]);

  return (
    <main className="dd-flex dd-h-[calc(100dvh-var(--navbar-height))] dd-items-center dd-overflow-scroll">
      <form
        className="dd-h-full dd-w-full sm:dd-mx-auto sm:dd-w-fit"
        action={(formData) => {
          if (templatePreview) {
            formData.append("template_id", templatePreview.id);
          }
          setupAction(formData);
        }}
      >
        <BusinessNameStep
          onNext={onNext}
          className={cn(step === 1 ? "dd-block" : "dd-hidden")}
        />
        <BusinessLogoStep
          onNext={onNext}
          onBack={onBack}
          className={cn(step === 2 ? "dd-block" : "dd-hidden")}
        />
        <SocialNetworkStep
          onNext={onNext}
          onBack={onBack}
          className={cn(step === 3 ? "dd-block" : "dd-hidden")}
        />
        <ProjectTemplateStep
          onNext={onNext}
          onBack={onBack}
          className={cn(step === 4 ? "dd-block" : "dd-hidden")}
        />
        <TemplateOptionsStep
          templates={templates}
          onPreview={setTemplatePreview}
          className={step === 5 ? "dd-block" : "dd-hidden"}
        />
        <div ref={portalRef}></div>
      </form>
      {templatePreview !== null &&
        portalRef.current &&
        createPortal(
          <PreviewModal
            title={templatePreview.name}
            onBack={() => {
              setTemplatePreview(null);
            }}
            actionButton={<Button type="submit">Use This Template</Button>}
          />,
          portalRef.current,
        )}
    </main>
  );
}
