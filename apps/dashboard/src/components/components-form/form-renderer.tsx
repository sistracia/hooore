import type {
  PageContentComponentContent,
  PageContentComponentProps,
} from "@repo/components/types/page-content";
import { useEffect } from "react";
import {
  Controller,
  FormProvider,
  useFieldArray,
  useForm,
  useFormContext,
  type Control,
  type FieldValues,
} from "react-hook-form";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { FieldGroup } from "../field-group";
import { AutocompleteLink } from "../autocomplete-link";
import { InputFile } from "../input-file";
import { Input } from "../ui/input";
import type {
  AdditionalFieldArrayProps,
  FieldGroup as FieldGroupField,
  FormField,
} from "./types";
import { SCHEMAS } from "./form-renderer-schemas";
import { Button } from "../ui/button";
import { PlusIcon, TrashIcon } from "@radix-ui/react-icons";
import { cn } from "@repo/utils";

function FormFieldArrayRenderer<TFieldValues extends FieldValues = FieldValues>(
  props: AdditionalFieldArrayProps<string, FormField<TFieldValues>> & {
    projectId: string;
  },
) {
  const { control } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: props.name,
  });

  return (
    <>
      {fields.map((field, fieldIndex) => {
        return (
          <div
            key={field.id}
            className={cn(
              "dd-flex dd-flex-col dd-space-y-4",
              props.style === "default" &&
                "dd-flex dd-h-[40px] dd-items-center dd-justify-center dd-gap-2",
              props.style === "with-label" &&
                "dd-mb-4 dd-rounded-lg dd-border dd-p-4",
            )}
          >
            <div className="dd-flex dd-justify-between">
              <span className="dd-mb-2 dd-block">
                {props.labelPrefix
                  ? `${props.labelPrefix} ${fieldIndex + 1}`
                  : ""}
              </span>
              <Button
                type="button"
                variant="outline"
                size="icon"
                className="dd-h-[25px] dd-w-[25px]"
                onClick={() => {
                  remove(fieldIndex);
                }}
              >
                <TrashIcon className="dd-h-4 dd-w-4" />
              </Button>
            </div>

            {props.children.map((children) => {
              const name = `${props.name}.${fieldIndex}.${children.name}`;
              return (
                // @ts-expect-error By data, this should be fine, but TypeScipt not sure about that
                <FormFieldRenderer
                  {...children}
                  key={name}
                  control={control}
                  projectId={props.projectId}
                  name={name}
                />
              );
            })}
          </div>
        );
      })}
      <Button
        type="button"
        variant="outline"
        className="dd-w-full dd-gap-2"
        onClick={() => {
          append({});
        }}
      >
        {props.addFieldText} <PlusIcon className="dd-h-4 dd-w-4" />
      </Button>
    </>
  );
}

function FormFieldGroupRenderer<TFieldValues extends FieldValues = FieldValues>(
  props: FieldGroupField<TFieldValues> & {
    projectId: string;
    control: Control<FieldValues, unknown>;
  },
) {
  return (
    <FieldGroup label={props.label}>
      {props.children.map((children) => {
        return (
          // @ts-expect-error By data, this should be fine, but TypeScipt not sure about that
          <FormFieldRenderer
            {...children}
            key={children.name}
            control={props.control}
            projectId={props.projectId}
          />
        );
      })}
    </FieldGroup>
  );
}

function FormFieldRenderer<TFieldValues extends FieldValues = FieldValues>(
  props: FormField<TFieldValues> & {
    projectId: string;
    control: Control<FieldValues, unknown>;
  },
) {
  if (props.type === "field-group") {
    return <FormFieldGroupRenderer {...props} />;
  }

  if (props.type === "field-array") {
    return <FormFieldArrayRenderer {...props} />;
  }

  if (props.type === "autocomplete-link") {
    return (
      <Label>
        {props.label}
        <Controller
          name={props.name}
          control={props.control}
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
          control={props.control}
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
          control={props.control}
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
          control={props.control}
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

export function FormRenderer({
  slug,
  content,
  onChange,
  projectId,
}: FormRendererProps) {
  const methods = useForm<PageContentComponentContent>({
    defaultValues: content,
  });

  const { watch, control } = methods;

  useEffect(() => {
    const subscription = watch((value) => {
      // @ts-expect-error By data, the content should be always match the slug, but TypeScipt not sure about that
      onChange({ slug: slug, content: value });
    });
    return () => subscription.unsubscribe();
  }, [slug, watch, onChange]);

  const schema = SCHEMAS.find((schema) => {
    return schema.slug === slug;
  });

  if (!schema) {
    return null;
  }

  const schemaFields = schema.fields;

  return (
    <FormProvider {...methods}>
      <form className="dd-flex dd-flex-col dd-space-y-4">
        {schemaFields.map((schemaField, schemaFieldIndex) => {
          return (
            // @ts-expect-error By data, the field name should be correct, but TypeScipt not sure about that
            <FormFieldRenderer
              {...schemaField}
              key={schemaFieldIndex}
              control={control}
              projectId={projectId}
            />
          );
        })}
      </form>
    </FormProvider>
  );
}
