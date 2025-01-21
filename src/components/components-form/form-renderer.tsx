import type {
  PageContentComponentContent,
  PageContentComponentProps,
} from "@hooore/components/types/page-content";
import { Icon } from "@iconify/react";
import { PlusIcon, TrashIcon } from "@radix-ui/react-icons";
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
import { AutocompleteLink } from "../autocomplete-link";
import { FieldGroup } from "../field-group";
import { IconPicker } from "../icon-picker";
import { InputFile } from "../input-file";
import { SimpleCollapsible } from "../simple-collapsible";
import { Sortable } from "../sortable";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { SCHEMAS } from "./form-renderer-schemas";
import type {
  AdditionalFieldArrayBasicProps,
  AdditionalFieldArraySortableProps,
  FieldGroup as FieldGroupField,
  FormField,
  FormFields,
} from "./types";

function FormFieldArrayRenderer<TFieldValues extends FieldValues = FieldValues>(
  props: AdditionalFieldArrayBasicProps<string, FormField<TFieldValues>> & {
    projectId: string;
  }
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
            className="dd-flex dd-flex-col dd-gap-4 dd-rounded-lg dd-border dd-p-2"
          >
            <div className="dd-flex dd-justify-between">
              <span className="dd-mb-2 dd-block">
                {`${props.labelPrefix} ${fieldIndex + 1}`}
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

            {props.fields.map((field) => {
              const name = `${props.name}.${fieldIndex}.${field.name}`;
              return (
                // @ts-expect-error By data, this should be fine, but TypeScipt not sure about that
                <FormFieldRenderer
                  {...field}
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

function CollapsibleItem<TFieldValues extends FieldValues = FieldValues>(
  props: AdditionalFieldArraySortableProps<string, FormField<TFieldValues>> & {
    projectId: string;
    control: Control<FieldValues, unknown>;
    action: React.ReactNode;
  }
) {
  const { watch } = useFormContext();

  const watchedInitialCollapseFields = (
    props.sortitem.initialCollapseFields || []
  ).map((initialCollapseField) => {
    return watch(`${props.name}.${initialCollapseField}`);
  });

  const initialCollapse = watchedInitialCollapseFields.reduce(
    (initialValue, watchedInitialCollapseField) => {
      return initialValue || !!watchedInitialCollapseField;
    },
    false
  );

  const labelFieldValue = props.sortitem.labelField
    ? watch(`${props.name}.${props.sortitem.labelField}`)
    : undefined;

  const label =
    props.sortitem.labelIcon && typeof labelFieldValue === "string" ? (
      <Icon icon={labelFieldValue} className="dd-h-4 dd-w-4" />
    ) : (
      labelFieldValue
    );

  return (
    <SimpleCollapsible
      initialCollapse={initialCollapse}
      label={label}
      action={props.action}
    >
      {props.sortitem.fields.map((field) => {
        const name = `${props.name}.${field.name}`;
        return (
          // @ts-expect-error By data, this should be fine, but TypeScipt not sure about that
          <FormFieldRenderer
            {...field}
            key={name}
            control={props.control}
            projectId={props.projectId}
            name={name}
          />
        );
      })}
    </SimpleCollapsible>
  );
}

function FormFieldSortableArrayRenderer<
  TFieldValues extends FieldValues = FieldValues
>(
  props: AdditionalFieldArraySortableProps<string, FormField<TFieldValues>> & {
    projectId: string;
  }
) {
  const { control } = useFormContext();
  const { fields, append, remove, swap } = useFieldArray({
    control,
    name: props.name,
  });

  return (
    <>
      <Sortable items={fields} onSwap={swap} onRemove={remove}>
        {({ item, itemIndex, dragButton, removeButton }) => {
          const name = `${props.name}.${itemIndex}`;
          return (
            <CollapsibleItem
              {...props}
              name={name}
              key={item.id}
              control={control}
              action={
                <>
                  {dragButton}
                  {removeButton}
                </>
              }
            />
          );
        }}
      </Sortable>
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
  }
) {
  return (
    <FieldGroup label={props.label}>
      {props.fields.map((field) => {
        const name = `${props.name}.${field.name}`;
        return (
          // @ts-expect-error By data, this should be fine, but TypeScipt not sure about that
          <FormFieldRenderer
            {...field}
            name={name}
            key={name}
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
  }
) {
  if (props.type === "field-group") {
    return <FormFieldGroupRenderer {...props} />;
  }

  if (props.type === "field-array") {
    return <FormFieldArrayRenderer {...props} />;
  }

  if (props.type === "field-sortable-array") {
    return <FormFieldSortableArrayRenderer {...props} />;
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

  if (props.type === "iconpicker") {
    return (
      <Label>
        {props.label}
        <Controller
          name={props.name}
          control={props.control}
          render={({ field }) => {
            const { onChange, value } = field;
            return <IconPicker value={value} onChange={onChange} />;
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
  schemas?: FormFields[];
};

export function FormRenderer({
  slug,
  content,
  onChange,
  projectId,
  schemas = SCHEMAS,
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

  const schema = schemas.find((schema) => {
    return schema.slug === slug;
  });

  if (!schema) {
    return null;
  }

  const schemaFields = schema.fields;

  return (
    <FormProvider {...methods}>
      <form className="dd-flex dd-flex-col dd-gap-4">
        {schemaFields.map((schemaField, schemaFieldIndex) => {
          return (
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
