import type { PageContentComponentSlug } from "@hooore/components/types/page-content";
import type { FieldValues } from "react-hook-form";

export type AdditionalFieldProps<TName> = {
  name: TName;
  type:
    | "input-text"
    | "textarea"
    | "input-file"
    | "autocomplete-link"
    | "iconpicker";
  label?: string;
  placeholder?: string;
};

export type AdditionalFieldArrayBasicProps<TName, TChildren> = {
  name: TName;
  type: "field-array";
  addFieldText: string;
  labelPrefix: string;
  fields: TChildren[];
};

export type AdditionalFieldArraySortableProps<TName, TChildren> = {
  name: TName;
  type: "field-sortable-array";
  addFieldText: string;
  sortitem: {
    initialCollapseFields?: (TChildren extends Record<string, unknown>
      ? TChildren["name"]
      : never)[];
    labelField?: TChildren extends Record<string, unknown>
      ? TChildren["name"]
      : never;
    labelIcon?: boolean;
    fields: TChildren[];
  };
};

export type AdditionalFieldArrayProps<TName, TChildren> =
  | AdditionalFieldArrayBasicProps<TName, TChildren>
  | AdditionalFieldArraySortableProps<TName, TChildren>;

export type Primitive = string | number | boolean | undefined | null;

export type FieldObject<T> = {
  [K in keyof T]-?: T[K] extends Primitive
    ? AdditionalFieldProps<K>
    : T[K] extends (infer U)[] | undefined
    ? AdditionalFieldArrayProps<K, FormField<Exclude<U, undefined>>>
    : T[K] extends object
    ? AdditionalFieldArrayProps<K, FormField<T[K]>>
    : never;
}[keyof T & string];

export type FieldGroup<T> = {
  type: "field-group";
  name: "";
  label?: string;
  fields: FormField<T>[];
};

export type FormField<T> = FieldObject<T> | FieldGroup<T>;

export type FormFields<
  TSlug extends PageContentComponentSlug = PageContentComponentSlug,
  TFieldValues extends FieldValues = FieldValues
> = {
  slug: TSlug;
  fields: FormField<TFieldValues>[];
};
