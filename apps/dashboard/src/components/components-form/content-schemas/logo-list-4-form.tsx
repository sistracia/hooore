import type {
  LogoList4Props,
  LogoList4Slug,
} from "@repo/components/types/template-types/logo-list-4";
import type { FormFields } from "../types";

export const LOGO_LIST_4_FORM_SCHEMA: FormFields<
  LogoList4Slug,
  LogoList4Props
> = {
  slug: "logo-list-4",
  fields: [
    {
      type: "textarea",
      name: "title",
      label: "Title",
      placeholder: "Enter the title here",
    },
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
