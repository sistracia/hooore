import type {
  LogoList3Props,
  LogoList3Slug,
} from "@repo/components/types/template-types/logo-list-3";
import type { FormFields } from "../types";

export const LOGO_LIST_3_FORM_SCHEMA: FormFields<
  LogoList3Slug,
  LogoList3Props
> = {
  slug: "logo-list-3",
  fields: [
    {
      type: "textarea",
      name: "description",
      label: "Description",
      placeholder: "Enter the description here",
    },
    {
      type: "field-array",
      name: "images",
      addFieldText: "Add Logo",
      labelPrefix: "Logo",
      fields: [
        {
          type: "input-file",
          name: "image",
        },
      ],
    },
  ],
};
