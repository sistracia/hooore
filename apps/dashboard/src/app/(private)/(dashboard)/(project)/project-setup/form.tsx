"use client";

import type { TemplateSchema } from "@/actions/project.definition";
import {
  type ProjectFormSchema,
  projectLogoSchema,
  type ProjectLogoSchema,
  projectNameSchema,
  type ProjectNameSchema,
  type ProjectTemplateSchema,
  projectTemplateSchema,
} from "@/actions/project.definition";
import { ComingSoonOverlay } from "@/components/coming-soon-overlay";
import { InputFile } from "@/components/input-file";
import { SetupLayout } from "@/components/setup-layout";
import {
  TemplatePreview,
  type TemplatePreviewProps,
} from "@/components/template-preview";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { FuncActionState } from "@/types/result";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "@hooore/utils";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Controller, useForm } from "react-hook-form";

const noop = () => {
  return undefined;
};

function BusinessNameForm(props: {
  className?: string;
  error?: string;
  loading?: boolean;
  onBack?: () => void;
  onSubmit?: (value: ProjectNameSchema) => void;
}) {
  const { className, onBack, onSubmit, error, loading } = props;

  const { register, handleSubmit, formState, watch } =
    useForm<ProjectNameSchema>({
      resolver: zodResolver(projectNameSchema),
      defaultValues: {
        business_name: "",
      },
    });

  const businessName = watch("business_name", "");
  const businessNameError = formState.errors.business_name?.message;

  return (
    <form
      className={cn("dd-flex dd-h-full dd-items-center", className)}
      onSubmit={onSubmit && handleSubmit(onSubmit)}
    >
      <SetupLayout
        className="sm:dd-w-[550px]"
        onBack={onBack}
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
            {...register("business_name")}
            name="business_name"
            placeholder="Enter the business name"
          />
        </div>
        {(businessNameError !== undefined || error !== undefined) && (
          <p className="dd-my-4 dd-text-red-500">
            {businessNameError || error}
          </p>
        )}
        {loading && "Loading..."}
      </SetupLayout>
    </form>
  );
}

function BusinessLogoForm(props: {
  className?: string;
  error?: string;
  loading?: boolean;
  onBack?: () => void;
  onSubmit?: (value: ProjectLogoSchema) => void;
}) {
  const { className, onBack, onSubmit, error, loading } = props;

  const { handleSubmit, formState, control } = useForm<ProjectLogoSchema>({
    resolver: zodResolver(projectLogoSchema),
    defaultValues: {
      business_logo: "",
    },
  });

  const businessLogoError = formState.errors.business_logo?.message;

  return (
    <form
      className={cn("dd-flex dd-h-full dd-items-center", className)}
      onSubmit={onSubmit && handleSubmit(onSubmit)}
    >
      <SetupLayout
        className="sm:dd-w-[550px]"
        onBack={onBack}
        onNext={noop}
        badge="About"
        title="Do you have logo for your business?"
        nextButtonText="Next"
        nextButtonDisabled={businessLogoError !== undefined}
      >
        <Label>
          <Controller
            control={control}
            name="business_logo"
            render={({ field }) => {
              const { onChange, value } = field;
              return <InputFile value={value} onChange={onChange} />;
            }}
          />
        </Label>
        {(businessLogoError !== undefined || error !== undefined) && (
          <p className="dd-my-4 dd-text-red-500">
            {businessLogoError || error}
          </p>
        )}
        {loading && "Loading..."}
      </SetupLayout>
    </form>
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
    <Wrapper className="dd-rounded-lg dd-border" role="option">
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

function PreviewModal(props: TemplatePreviewProps) {
  return (
    <div className="dd-absolute dd-left-0 dd-top-0 dd-z-50 dd-h-full dd-w-full">
      <TemplatePreview {...props} />
    </div>
  );
}

function TemplateOptionsForm(props: {
  className?: string;
  error?: string;
  loading?: boolean;
  onBack?: () => void;
  onSubmit?: (value: ProjectTemplateSchema) => void;
  templates: TemplateSchema[];
  domain: string;
}) {
  const { className, onBack, onSubmit, loading, templates, domain } = props;

  const [templatePreview, setTemplatePreview] = useState<TemplateSchema | null>(
    null
  );

  const { handleSubmit, control } = useForm<ProjectTemplateSchema>({
    resolver: zodResolver(projectTemplateSchema),
    defaultValues: {
      project_template_id: "",
    },
  });

  const portalRef = useRef<HTMLDivElement>(null);

  return (
    <form
      className={cn("dd-flex dd-h-full dd-items-center", className)}
      onSubmit={onSubmit && handleSubmit(onSubmit)}
    >
      <SetupLayout
        className="dd-h-full sm:dd-w-[740px]"
        onBack={onBack}
        badge="Template"
        title="Choose a template"
        stickyHeader
      >
        <div className="dd-grid dd-grid-cols-1 dd-gap-6 dd-py-4 sm:dd-grid-cols-2">
          {templates.map((template) => {
            return (
              <Controller
                control={control}
                key={template.id}
                name="project_template_id"
                render={({ field }) => {
                  const { onChange } = field;
                  return (
                    <TemplateOptionCard
                      name={template.business_name}
                      thumbnailUrl={template.thumbnail}
                      onPreview={() => {
                        setTemplatePreview?.(template);
                        onChange(template.id);
                      }}
                    />
                  );
                }}
              />
            );
          })}
          <TemplateOptionCard comingSoon name="Company Profile X" />
          <TemplateOptionCard comingSoon name="Company Profile Y" />
          <TemplateOptionCard comingSoon name="Company Profile Z" />
        </div>
        <div ref={portalRef}></div>
        {templatePreview !== null &&
          portalRef.current &&
          createPortal(
            <PreviewModal
              title={templatePreview.business_name}
              className="dd-h-full"
              onBack={() => {
                setTemplatePreview(null);
              }}
              action={
                <div className="dd-flex dd-items-center">
                  <Button type="submit">Use This Template</Button>
                </div>
              }
            >
              <iframe
                title={`${templatePreview.business_name} Frame`}
                src={`https://${templatePreview.business_name_slug}.${domain}`}
                className="dd-h-full dd-w-full"
              ></iframe>
            </PreviewModal>,
            portalRef.current
          )}
        {loading && "Loading..."}
      </SetupLayout>
    </form>
  );
}

export function ProjectSetupForm(props: {
  redirect: string;
  domain: string;
  templates: TemplateSchema[];
  action: (project: ProjectFormSchema) => Promise<FuncActionState>;
}) {
  const { action, redirect, templates, domain } = props;

  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>();
  const [formStep, setFormStep] = useState(1);
  const [formValue, setFormValue] = useState<ProjectFormSchema>({
    business_name: "",
    business_logo: "",
    project_template_id: "",
  });

  const onNext = (
    value: ProjectNameSchema | ProjectLogoSchema | ProjectTemplateSchema
  ) => {
    const newFormValue = { ...formValue, ...value };
    if (formStep == 3) {
      setLoading(true);
      action(newFormValue)
        .then((res) => {
          if (!res.success) {
            return setError(res.error);
          }

          router.push(redirect);
        })
        .finally(() => {
          setLoading(false);
        });
      return;
    }

    setFormValue(newFormValue);
    setFormStep((formStep) => {
      return ++formStep;
    });
  };

  const onBack = () => {
    if (formStep == 1) {
      return;
    }

    setFormStep((formStep) => {
      return --formStep;
    });
  };

  return (
    <>
      <BusinessNameForm
        onSubmit={onNext}
        error={error}
        loading={loading}
        className={formStep === 1 ? "dd-block" : "dd-hidden"}
      />
      <BusinessLogoForm
        onSubmit={onNext}
        onBack={onBack}
        error={error}
        loading={loading}
        className={formStep === 2 ? "dd-block" : "dd-hidden"}
      />
      <TemplateOptionsForm
        onSubmit={onNext}
        error={error}
        loading={loading}
        className={formStep === 3 ? "dd-block" : "dd-hidden"}
        templates={templates}
        domain={domain}
      />
    </>
  );
}
