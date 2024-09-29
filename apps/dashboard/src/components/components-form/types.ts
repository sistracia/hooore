import type { PageContentComponentSlug } from "@repo/components/types/page-content";
import type { FieldValues } from "react-hook-form";

export type AdditionalFieldProps<TName> = {
  name: TName;
  type: "input-text" | "textarea" | "input-file" | "autocomplete-link";
  label?: string;
  placeholder?: string;
};

export type AdditionalFieldArrayProps<TName, TChildren> = {
  name: TName;
  type: "field-array";
  addFieldText: string;
  labelPrefix?: string;
  style?: "default" | "with-label";
  children: TChildren[];
};

export type Primitive = string | number | boolean | undefined | null;

export type FieldObject<T> = {
  [K in keyof T]-?: T[K] extends Primitive
    ? AdditionalFieldProps<K>
    : T[K] extends (infer U)[] | undefined
      ? AdditionalFieldArrayProps<K, FieldObject<Exclude<U, undefined>>>
      : T[K] extends object
        ? AdditionalFieldArrayProps<K, FieldObject<T[K]>>
        : never;
}[keyof T & string];

export type FieldGroup<TFieldValues extends FieldValues = FieldValues> = {
  type: "field-group";
  name: "";
  label?: string;
  children: FormField<TFieldValues>[];
};

export type FormField<TFieldValues extends FieldValues = FieldValues> =
  | FieldObject<TFieldValues>
  | FieldGroup<TFieldValues>;

export type FormFields<
  TSlug extends PageContentComponentSlug = PageContentComponentSlug,
  TFieldValues extends FieldValues = FieldValues,
> = {
  slug: TSlug;
  fields: FormField<TFieldValues>[];
};
