import type { PageContentComponentSlug } from "@repo/components/types/page-content";
import type { FieldPath, FieldValues } from "react-hook-form";

export type InputTextField<TFieldValues extends FieldValues = FieldValues> = {
  type: "input-text";
  name: FieldPath<TFieldValues>;
};

export type TextareaField<TFieldValues extends FieldValues = FieldValues> = {
  type: "textarea";
  name: FieldPath<TFieldValues>;
};

export type InputFileField<TFieldValues extends FieldValues = FieldValues> = {
  type: "input-file";
  name: FieldPath<TFieldValues>;
};

export type AutocompleteLinkField<
  TFieldValues extends FieldValues = FieldValues,
> = {
  type: "autocomplete-link";
  name: FieldPath<TFieldValues>;
};

export type FormInputField<TFieldValues extends FieldValues = FieldValues> = (
  | InputTextField<TFieldValues>
  | TextareaField<TFieldValues>
  | InputFileField<TFieldValues>
  | AutocompleteLinkField<TFieldValues>
) & {
  label?: string;
  placeholder?: string;
};

export type FieldGroup<TFieldValues extends FieldValues = FieldValues> = {
  type: "field-group";
  fields: FormField<TFieldValues>[];
};

export type FormField<TFieldValues extends FieldValues = FieldValues> =
  | FormInputField<TFieldValues>
  | FieldGroup<TFieldValues>;

export type FormFields<TFieldValues extends FieldValues = FieldValues> = {
  slug: PageContentComponentSlug;
  fields: FormField<TFieldValues>[];
};
