import type {
  Content7Props,
  Content7Slug,
} from "@repo/components/types/template-types/content-7";
import type { FormFields } from "../types";

export const CONTENT_7_FORM_SCHEMA: FormFields<Content7Slug, Content7Props> = {
  slug: "content-7",
  fields: [
    {
      type: "input-text",
      label: "Sub-Headline",
      name: "sub_headline",
      placeholder: "Enter the sub-headline here",
    },
    {
      type: "input-text",
      label: "Headline",
      name: "headline",
      placeholder: "Enter the headline here",
    },
    {
      type: "textarea",
      label: "Description",
      name: "description",
      placeholder: "Enter the description here",
    },
    {
      type: "input-file",
      name: "image",
      label: "Image",
    },
    {
      type: "field-group",
      name: "",
      label: "Call To Action",
      fields: [
        {
          type: "textarea",
          label: "Description",
          name: "cta_description",
          placeholder: "Enter the description here",
        },
        {
          type: "input-text",
          label: "Label",
          name: "cta_button_label",
          placeholder: "Enter the label here",
        },
        {
          type: "autocomplete-link",
          label: "Link",
          name: "cta_link",
          placeholder: "Enter the link here",
        },
      ],
    },
  ],
};
