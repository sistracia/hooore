"use client";

import {
  projectFormStep1Schema,
  type ProjectFormStep1Schema,
  projectFormStep2Schema,
  type ProjectFormStep2Schema,
  type ProjectFormSchema,
  type ProjectState,
} from "@/actions/project.definition";
import { TemplateSchema } from "@/actions/template.definition";
import { Button } from "@/components/ui/button";
// import { ComingSoonOverlay } from "@/components/coming-soon-overlay";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SetupLayout } from "@/components/setup-layout";
import {
  TemplatePreview,
  TemplatePreviewProps,
} from "@/components/template-preview";
// import { ArrowRightIcon } from "@radix-ui/react-icons";
import { cn } from "@repo/utils";
import { useEffect, useRef, useState } from "react";
import { createPortal, useFormState } from "react-dom";
import { toast } from "@/components/ui/use-toast";
// import { Card, CardContent } from "@/components/card";
import { InputFile } from "@/components/input-file";
// import { SocialMediaFields } from "@/components/social-media-fields";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

type ProjectFormStepsSchema = ProjectFormStep1Schema | ProjectFormStep2Schema;

const noop = () => {
  return undefined;
};

function BusinessNameStep(props: {
  className?: string;
  otherFormState?: ProjectFormSchema;
  action?: (formData: FormData) => void;
  onBack?: () => void;
  onNext?: (value: ProjectFormStep1Schema) => void;
}) {
  const { className, onBack, onNext, action, otherFormState } = props;
  const formRef = useRef<HTMLFormElement>(null);
  const { register, formState, watch, handleSubmit } =
    useForm<ProjectFormStep1Schema>({
      resolver: zodResolver(projectFormStep1Schema),
      defaultValues: otherFormState,
    });

  const businessNameValue = watch("business_name", "");
  const businessNameError = formState.errors.business_name;

  const onSubmit = (value: ProjectFormStep1Schema) => {
    if (action) {
      formRef.current?.submit();
      return;
    }

    onNext?.(value);
  };

  return (
    <form
      ref={formRef}
      className={cn(className, "dd-flex dd-h-full dd-items-center")}
      action={action}
      onSubmit={handleSubmit(onSubmit)}
    >
      <SetupLayout
        className="sm:dd-w-[550px]"
        onBack={onBack}
        onNext={noop}
        badge="About"
        title="What is the name of your business?"
        nextButtonText="Next"
        nextButtonType="submit"
        nextButtonDisabled={
          businessNameValue === "" || businessNameError !== undefined
        }
      >
        <div className="dd-w-full sm:dd-w-[360px]">
          <Input
            {...register("business_name")}
            placeholder="Enter your business name"
          />
        </div>
        {businessNameError !== undefined && (
          <p className="dd-my-4 dd-text-red-500">{businessNameError.message}</p>
        )}
      </SetupLayout>
    </form>
  );
}

function BusinessLogoStep(props: {
  className?: string;
  otherFormState?: ProjectFormSchema;
  action?: (formData: FormData) => void;
  onBack?: () => void;
  onNext?: (value: ProjectFormStep2Schema) => void;
}) {
  const { className, onBack, onNext, action, otherFormState } = props;
  const formRef = useRef<HTMLFormElement>(null);
  const { control, formState, handleSubmit } = useForm<ProjectFormStep2Schema>({
    resolver: zodResolver(projectFormStep2Schema),
    defaultValues: otherFormState,
  });

  const businessLogoError = formState.errors.business_logo;

  const onSubmit = (value: ProjectFormStep2Schema) => {
    if (action) {
      formRef.current?.submit();
      return;
    }

    onNext?.(value);
  };

  return (
    <form
      ref={formRef}
      className={cn(className, "dd-flex dd-h-full dd-items-center")}
      action={action}
      onSubmit={handleSubmit(onSubmit)}
    >
      <SetupLayout
        className="sm:dd-w-[550px]"
        onBack={onBack}
        onNext={noop}
        badge="About"
        title="Do you have logo for your business?"
        nextButtonText="Create Project"
        nextButtonType="submit"
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
        {businessLogoError !== undefined && (
          <p className="dd-my-4 dd-text-red-500">
            {businessLogoError?.message}
          </p>
        )}
      </SetupLayout>
    </form>
  );
}

// function SocialNetworkStep(props: {
//   className?: string;
//   onNext?: () => void;
//   onBack?: () => void;
// }) {
//   const { className, onNext, onBack } = props;
//   return (
//     <div className={cn(className, "dd-flex dd-h-full dd-items-center")}>
//       <SetupLayout
//         className="sm:dd-w-[550px]"
//         onBack={onBack}
//         onNext={onNext}
//         badge="Social Network"
//         title="How people contact you?"
//         nextButtonText="Save & Proceed"
//         nextButtonType="button"
//       >
//         <SocialMediaFields />
//       </SetupLayout>
//     </div>
//   );
// }

// function ProjectTemplateStep(props: {
//   className?: string;
//   onNext?: () => void;
//   onBack?: () => void;
// }) {
//   const { className, onNext, onBack } = props;
//   return (
//     <div className={cn(className, "dd-flex dd-h-full dd-items-center")}>
//       <SetupLayout
//         className="sm:dd-w-[550px]"
//         onBack={onBack}
//         badge="Social Network"
//         title="Choose how to design your site"
//       >
//         <div className="dd-w-full">
//           <ComingSoonOverlay
//             as={Card}
//             className="dd-mb-3 dd-flex dd-items-center"
//           >
//             <CardContent
//               title="Start from template"
//               description="Create your site from popular design."
//               action={
//                 <Button
//                   type="button"
//                   variant="outline"
//                   size="icon"
//                   className="dd-mr-2"
//                   onClick={onNext}
//                 >
//                   <ArrowRightIcon className="dd-h-5 dd-w-5" />
//                 </Button>
//               }
//             />
//           </ComingSoonOverlay>
//           <ComingSoonOverlay
//             as={Card}
//             className="dd-mb-3 dd-flex dd-items-center"
//           >
//             <CardContent
//               title="Start from blank canvas"
//               description="Turn your business idea into lovely site."
//               action={
//                 <Button
//                   type="submit"
//                   variant="outline"
//                   size="icon"
//                   className="dd-mr-2"
//                 >
//                   <ArrowRightIcon className="dd-h-5 dd-w-5" />
//                 </Button>
//               }
//             />
//           </ComingSoonOverlay>
//         </div>
//       </SetupLayout>
//     </div>
//   );
// }

// function TemplateOptionCard(props: {
//   name: string;
//   comingSoon?: boolean;
//   thumbnailUrl?: string;
//   onPreview?: () => void;
// }) {
//   const { name, comingSoon, thumbnailUrl, onPreview } = props;

//   const Wrapper = comingSoon ? ComingSoonOverlay : "div";

//   return (
//     <Wrapper className="dd-rounded-lg dd-border">
//       <div className="dd-h-[400px] dd-border-b dd-p-6">
//         {thumbnailUrl ? (
//           <div className="dd-group dd-relative dd-overflow-hidden dd-rounded-md">
//             <img
//               className="dd-h-full dd-w-full dd-object-none"
//               src={thumbnailUrl}
//               alt={`${name} Thumbnail`}
//             />
//             <div className="dd-absolute dd-left-0 dd-top-0 dd-hidden dd-h-full dd-w-full dd-items-center dd-justify-center dd-bg-black/50 group-hover:dd-flex">
//               <Button type="button" variant="secondary" onClick={onPreview}>
//                 Preview
//               </Button>
//             </div>
//           </div>
//         ) : (
//           <div className="dd-h-full dd-w-full dd-rounded-md dd-bg-black dd-p-2"></div>
//         )}
//       </div>
//       <div className="dd-p-6">
//         <span className="dd-text-lg dd-font-semibold">{name}</span>
//       </div>
//     </Wrapper>
//   );
// }

// function TemplateOptionsStep(props: {
//   className?: string;
//   templates: TemplateSchema[];
//   onPreview?: (template: TemplateSchema) => void;
// }) {
//   const { className, templates, onPreview } = props;

//   return (
//     <SetupLayout
//       className={cn(className, "sm:dd-w-[740px]")}
//       badge="Template"
//       title="Choose a template"
//       stickyHeader
//     >
//       <div className="dd-grid dd-grid-cols-1 dd-gap-6 sm:dd-grid-cols-2">
//         {templates.map((template) => {
//           return (
//             <TemplateOptionCard
//               key={template.id}
//               name={template.name}
//               thumbnailUrl={template.thumbnail_url}
//               onPreview={() => {
//                 onPreview?.(template);
//               }}
//             />
//           );
//         })}
//         <TemplateOptionCard comingSoon name="Company Profile X" />
//         <TemplateOptionCard comingSoon name="Company Profile Y" />
//         <TemplateOptionCard comingSoon name="Company Profile Z" />
//       </div>
//     </SetupLayout>
//   );
// }

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
  const { action } = props;
  const [setupState, _] = useFormState(action, {
    success: true,
    projectId: "",
  });

  const [formState, setFormState] = useState<ProjectFormSchema>({
    business_logo: "",
    business_name: "",
  });

  const portalRef = useRef<HTMLDivElement>(null);

  const [templatePreview, setTemplatePreview] = useState<TemplateSchema | null>(
    null,
  );

  const [step, setStep] = useState(2);

  const onNext = (value: ProjectFormStepsSchema) => {
    if (step == 2) {
      return;
    }
    setFormState({ ...formState, ...value });
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
      <div className="dd-h-full dd-w-full sm:dd-mx-auto sm:dd-w-fit">
        <BusinessNameStep
          onNext={onNext}
          className={cn(step === 1 ? "dd-block" : "dd-hidden")}
        />
        <BusinessLogoStep
          onBack={onBack}
          onNext={onNext}
          className={cn(step === 2 ? "dd-block" : "dd-hidden")}
        />

        {/* <SocialNetworkStep
            onNext={onNext}
            onBack={onBack}
            className={cn(step === 3 ? "dd-block" : "dd-hidden")}
          /> */}
        {/* <ProjectTemplateStep
            onNext={onNext}
            onBack={onBack}
            className={cn(step === 3 ? "dd-block" : "dd-hidden")}
          /> */}
        {/* <TemplateOptionsStep
            templates={templates}
            onPreview={setTemplatePreview}
            className={step === 4 ? "dd-block" : "dd-hidden"}
          /> */}
        <div ref={portalRef}></div>
      </div>

      {templatePreview !== null &&
        portalRef.current &&
        createPortal(
          <PreviewModal
            title={templatePreview.name}
            onBack={() => {
              setTemplatePreview(null);
            }}
            actionButton={<Button type="submit">Use This Template</Button>}
          >
            <iframe
              title={`${templatePreview.name} Frame`}
              src="https://hooore.com"
              className="dd-h-full dd-w-full"
            ></iframe>
          </PreviewModal>,
          portalRef.current,
        )}
    </main>
  );
}
