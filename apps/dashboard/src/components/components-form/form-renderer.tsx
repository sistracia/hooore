import type {
  PageContentComponentContent,
  PageContentComponentProps,
} from "@repo/components/types/page-content";
// import { Hero1Form } from "./hero-1-form";
// import { Hero2Form } from "./hero-2-form";
// import { Hero3Form } from "./hero-3-form";
// import { Hero4Form } from "./hero-4-form";
// import { Hero5Form } from "./hero-5-form";
// import { LogoList1Form } from "./log-list-1-form";
// import { LogoList2Form } from "./logo-list-2-form";
// import { LogoList3Form } from "./logo-list-3-form";
// import { LogoList4Form } from "./logo-list-4-form";
// import { FeaturesList1Form } from "./features-list-1-form";
// import { FeaturesList2Form } from "./features-list-2-form";
// import { FeaturesList3Form } from "./features-list-3-form";
// import { FeaturesList4Form } from "./features-list-4-form";
// import { FeaturesList5Form } from "./features-list-5-form";
// import { FeaturesList6Form } from "./features-list-6-form";
// import { FeaturesList7Form } from "./features-list-7-form";
import { CALL_TO_ACTION_1_FORM_SCHEMA } from "./call-to-action-1-form";
// import { CallToAction2Form } from "./call-to-action-2-form";
// import { CallToAction3Form } from "./call-to-action-3-form";
// import { CallToAction4Form } from "./call-to-action-4-form";
// import { CallToAction5Form } from "./call-to-action-5-form";
// import { CallToAction6Form } from "./call-to-action-6-form";
// import { Faq1Form } from "./faq-1-form";
// import { Faq2Form } from "./faq-2-form";
// import { Faq3Form } from "./faq-3-form";
// import { Faq4Form } from "./faq-4-form";
// import { Footer1Form } from "./footer-1-form";
// import { Footer2Form } from "./footer-2-form";
// import { Footer3Form } from "./footer-3-form";
// import { Footer4Form } from "./footer-4-form";
// import { HowItWorks1Form } from "./how-it-works-1-form";
// import { Content1Form } from "./content-1-form";
// import { Content2Form } from "./content-2-form";
// import { Content3Form } from "./content-3-form";
// import { Content4Form } from "./content-4-form";
// import { Content5Form } from "./content-5-form";
// import { Content6Form } from "./content-6-form";
// import { Gallery1Form } from "./gallery-1-form";
// import { Gallery2Form } from "./gallery-2-form";
// import { Gallery3Form } from "./gallery-3-form";
// import { Collections1Form } from "./collections-1-form";
// import { Collections2Form } from "./collections-2-form";
// import { Collections3Form } from "./collections-3-form";
// import { Newsletter1Form } from "./newsletter-1-form";
// import { Newsletter2Form } from "./newsletter-2-form";
// import { Pricing1Form } from "./pricing-1-form";
// import { Pricing2Form } from "./pricing-2-form";
// import { Pricing3Form } from "./pricing-3-form";
// import { Team1Form } from "./team-1-form";
// import { Team2Form } from "./team-2-form";
// import { Team3Form } from "./team-3-form";
// import { Team4Form } from "./team-4-form";
// import { Blog1Form } from "./blog-1-form";
// import { Blog2Form } from "./blog-2-form";
// import { Blog3Form } from "./blog-3-form";
// import { Testimonials1Form } from "./testimonials-1-form";
// import { Testimonials2Form } from "./testimonials-2-form";
// import { Testimonials3Form } from "./testimonials-3-form";
// import { Testimonials4Form } from "./testimonials-4-form";
// import { Contact1Form } from "./contact-1-form";
// import { Contact2Form } from "./contact-2-form";
// import { Stats1Form } from "./stats-1-form";
// import { Stats2Form } from "./stats-2-form";
// import { Stats3Form } from "./stats-3-form";
// import { Step1Form } from "./step-1-form";
// import { Step2Form } from "./step-2-form";
// import { Step3Form } from "./step-3-form";
import { useEffect } from "react";
import {
  Controller,
  FormProvider,
  useForm,
  useFormContext,
  type FieldValues,
} from "react-hook-form";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { FieldGroup } from "../field-group";
import { AutocompleteLink } from "../autocomplete-link";
import { InputFile } from "../input-file";
import { Input } from "../ui/input";
import type { FormField, FormFields } from "./types";

const SCHEMAS = [CALL_TO_ACTION_1_FORM_SCHEMA] satisfies FormFields[];

function FormFieldRenderer<TFieldValues extends FieldValues = FieldValues>(
  props: FormField<TFieldValues> & {
    projectId: string;
  },
) {
  const { control } = useFormContext<TFieldValues>();
  if (props.type === "field-group") {
    return <FormFieldRenderer {...props} />;
  }

  if (props.type === "autocomplete-link") {
    return (
      <Label>
        {props.label}
        <Controller
          name={props.name}
          control={control}
          render={({ field }) => {
            const { name, onBlur, onChange, ref, value, disabled } = field;
            return (
              <AutocompleteLink
                projectId={props.projectId}
                name={name}
                onBlur={onBlur}
                onChange={onChange}
                ref={ref}
                value={value}
                disabled={disabled}
                placeholder={props.placeholder}
              />
            );
          }}
        />
      </Label>
    );
  }

  if (props.type === "input-file") {
    return (
      <Label>
        {props.label}
        <Controller
          control={control}
          name={props.name}
          render={({ field }) => {
            const { onChange, value } = field;
            return (
              <InputFile
                className="dd-mb-4 dd-mt-2"
                value={value}
                onChange={onChange}
              />
            );
          }}
        />
      </Label>
    );
  }

  if (props.type === "input-text") {
    return (
      <Label>
        {props.label}
        <Controller
          name={props.name}
          control={control}
          render={({ field }) => {
            const { name, onBlur, onChange, ref, value, disabled } = field;
            return (
              <Input
                name={name}
                onBlur={onBlur}
                onChange={onChange}
                ref={ref}
                value={value}
                disabled={disabled}
                placeholder={props.placeholder}
              />
            );
          }}
        />
      </Label>
    );
  }

  if (props.type === "textarea") {
    return (
      <Label>
        {props.label}
        <Controller
          name={props.name}
          control={control}
          render={({ field }) => {
            const { name, onBlur, onChange, ref, value, disabled } = field;
            return (
              <Textarea
                name={name}
                onBlur={onBlur}
                onChange={onChange}
                ref={ref}
                value={value}
                disabled={disabled}
                placeholder={props.placeholder}
              />
            );
          }}
        />
      </Label>
    );
  }

  return null;
}

export type FormRendererProps = PageContentComponentProps & {
  onChange: (values: PageContentComponentProps) => void;
  projectId: string;
};

export function FormRenderer(props: FormRendererProps) {
  const methods = useForm<PageContentComponentContent>({
    defaultValues: props.content,
  });

  const { watch } = methods;

  useEffect(() => {
    const subscription = watch((value) => {
      // @ts-expect-error By data, the content should be always match the slug, but TypeScipt not sure about that
      onChange({ slug: props.slug, content: value });
    });
    return () => subscription.unsubscribe();
  }, [props.slug, watch, props.onChange]);

  const schema = SCHEMAS.find((schema) => {
    return schema.slug === props.slug;
  });

  if (!schema) {
    return null;
  }

  const schemaFields = schema.fields;

  return (
    <FormProvider {...methods}>
      <form>
        {schemaFields.map((schemaField) => {
          return (
            <FormFieldRenderer
              {...schemaField}
              key={schemaField.type}
              projectId={props.projectId}
            />
          );
        })}

        <FieldGroup label="Call To Action"></FieldGroup>
      </form>
    </FormProvider>
  );
}
