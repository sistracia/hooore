import type {
  LogoList2Props,
  LogoList2Slug,
} from "@repo/components/types/template-types/logo-list-2";
import type { FormFields } from "../types";

export const LOGO_LIST_2_FORM_SCHEMA: FormFields<
  LogoList2Slug,
  LogoList2Props
> = {
  slug: "logo-list-2",
  fields: [
    {
      type: "textarea",
      name: "description",
      label: "Description",
      placeholder: "Enter the description here",
    },
    {
      type: "field-group",
      name: "",
      label: "Call To Action",
      fields: [
        {
          type: "input-text",
          name: "cta_button_label",
          label: "Button Label",
          placeholder: "Enter the label here",
        },
        {
          type: "autocomplete-link",
          name: "cta_link",
          label: "Link",
          placeholder: "Enter the link here",
        },
      ],
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
