"use client";

import {
  ProjectFormSchema,
  projectFormStep1Schema,
  type ProjectFormStep1Schema,
  //   projectFormStep2Schema,
  //   type ProjectFormStep2Schema,
} from "@/actions/project.definition";
import { Input } from "@/components/ui/input";
import { SetupLayout } from "@/components/setup-layout";
import { useState } from "react";
// import { Label } from "@/components/ui/label";
// import { InputFile } from "@/components/input-file";
import { useRouter } from "next/navigation";
import { cn } from "@repo/utils";
// import { SocialMediaFields } from "@/components/social-media-fields";
// import { Button } from "@/components/ui/button";
// import { ComingSoonOverlay } from "@/components/coming-soon-overlay";
// import { ArrowRightIcon } from "@radix-ui/react-icons";
// import { Card, CardContent } from "@/components/card";
// import { type TemplateSchema } from "@/actions/template.definition";
// import { useRef } from "react";
// import { createPortal } from "react-dom";
// import {
//   TemplatePreview,
//   type TemplatePreviewProps,
// } from "@/components/template-preview";
// import { useForm, Controller } from "react-hook-form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { FuncActionState } from "@/types/result";

const noop = () => {
  return undefined;
};

function BusinessNameForm(props: {
  className?: string;
  error?: string;
  loading?: boolean;
  onBack?: () => void;
  onSubmit?: (value: ProjectFormStep1Schema) => void;
}) {
  const { className, onBack, onSubmit, error, loading } = props;

  const { register, handleSubmit, formState, watch } =
    useForm<ProjectFormStep1Schema>({
      resolver: zodResolver(projectFormStep1Schema),
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
        nextButtonText="Create Project"
        nextButtonDisabled={
          businessName === "" || businessNameError !== undefined
        }
      >
        <div className="dd-w-full sm:dd-w-[360px]">
          <Input
            {...register("business_name")}
            name="business_name"
            placeholder="Enter your business name"
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

// function BusinessLogoForm(props: {
//   className?: string;
//   error?: string;
//   loading?: boolean;
//   onBack?: () => void;
//   onSubmit?: (value: ProjectFormStep2Schema) => void;
// }) {
//   const { className, onBack, onSubmit, error, loading } = props;

//   const { handleSubmit, formState, control } = useForm<ProjectFormStep2Schema>({
//     resolver: zodResolver(projectFormStep2Schema),
//     defaultValues: {
//       business_logo: "",
//     },
//   });

//   const businessLogoError = formState.errors.business_logo?.message;

//   return (
//     <form
//       className={cn("dd-flex dd-h-full dd-items-center", className)}
//       onSubmit={onSubmit && handleSubmit(onSubmit)}
//     >
//       <SetupLayout
//         className="sm:dd-w-[550px]"
//         onBack={onBack}
//         onNext={noop}
//         badge="About"
//         title="Do you have logo for your business?"
//         nextButtonText="Create Project"
//         nextButtonDisabled={businessLogoError !== undefined}
//       >
//         <Label>
//           <Controller
//             control={control}
//             name="business_logo"
//             render={({ field }) => {
//               const { onChange, value } = field;
//               return <InputFile value={value} onChange={onChange} />;
//             }}
//           />
//         </Label>
//         {(businessLogoError !== undefined || error !== undefined) && (
//           <p className="dd-my-4 dd-text-red-500">
//             {businessLogoError || error}
//           </p>
//         )}
//         {loading && "Loading..."}
//       </SetupLayout>
//     </form>
//   );
// }

// function SocialNetworkStep() {
//   return (
//     <div className="dd-flex dd-h-full dd-items-center">
//       <SetupLayout
//         className="sm:dd-w-[550px]"
//         onBack={noop}
//         onNext={noop}
//         badge="Social Network"
//         title="How people contact you?"
//         nextButtonText="Save & Proceed"
//       >
//       {loading && "Loading..."}  <SocialMediaFields />
//       </SetupLayout>
//     </div>
//   );
// }

// function ProjectTemplateStep() {
//   return (
//     <div className="dd-flex dd-h-full dd-items-center">
//       <SetupLayout
//         className="sm:dd-w-[550px]"
//         onBack={noop}
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
//                   onClick={noop}
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
//       {loading && "Loading..."}  </div>
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

// function PreviewModal(props: TemplatePreviewProps) {
//   return (
//     <div className="dd-absolute dd-left-0 dd-top-0 dd-z-50 dd-h-full dd-w-full">
//       <TemplatePreview {...props} />
//     </div>
//   );
// }

// function TemplateOptionsForm(props: { templates: TemplateSchema[] }) {
//   const { templates } = props;

//   const [templatePreview, setTemplatePreview] = useState<TemplateSchema | null>(
//     null,
//   );

//   const portalRef = useRef<HTMLDivElement>(null);

//   return (
//     <SetupLayout
//       className="sm:dd-w-[740px]"
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
//                 setTemplatePreview?.(template);
//               }}
//             />
//           );
//         })}
//         <TemplateOptionCard comingSoon name="Company Profile X" />
//         <TemplateOptionCard comingSoon name="Company Profile Y" />
//         <TemplateOptionCard comingSoon name="Company Profile Z" />
//       </div>
//       <div ref={portalRef}></div>
//       {templatePreview !== null &&
//         portalRef.current &&
//         createPortal(
//           <PreviewModal
//             title={templatePreview.name}
//             onBack={() => {
//               setTemplatePreview(null);
//             }}
//             actionButton={<Button type="submit">Use This Template</Button>}
//           >
//             <iframe
//               title={`${templatePreview.name} Frame`}
//               src="https://hooore.com"
//               className="dd-h-full dd-w-full"
//             ></iframe>
//           </PreviewModal>,
//           portalRef.current,
//     {loading && "Loading..."}    )}
//     </SetupLayout>
//   );
// }

export function ProjectSetupForm(props: {
  redirect: string;
  action: (project: ProjectFormSchema) => Promise<FuncActionState>;
}) {
  const { action, redirect } = props;

  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>();
  const [formStep, setFormStep] = useState(1);
  const [formValue, setFormValue] = useState<ProjectFormSchema>({
    business_logo: "",
    business_name: "",
  });

  const onNext = (value: ProjectFormStep1Schema) => {
    const newFormValue = { ...formValue, ...value };
    if (formStep == 1) {
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

  //   const onBack = () => {
  //     if (formStep == 1) {
  //       return;
  //     }

  //     setFormStep((formStep) => {
  //       return --formStep;
  //     });
  //   };

  return (
    <>
      <BusinessNameForm
        onSubmit={onNext}
        error={error}
        loading={loading}
        className={formStep === 1 ? "dd-block" : "dd-hidden"}
      />
      {/* <BusinessLogoForm
        onBack={onBack}
        onSubmit={onNext}
        error={error}
        loading={loading}
        className={formStep === 2 ? "dd-block" : "dd-hidden"}
      /> */}
    </>
  );
}
