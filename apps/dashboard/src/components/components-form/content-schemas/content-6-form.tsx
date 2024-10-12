import type {
  Content6Props,
  Content6Slug,
} from "@repo/components/types/template-types/content-6";
import type { FormFields } from "../types";

export const CONTENT_6_FORM_SCHEMA: FormFields<Content6Slug, Content6Props> = {
  slug: "content-6",
  fields: [
    {
      type: "iconpicker",
      name: "icon",
      label: "Icon",
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
      type: "field-group",
      name: "",
      label: "Call To Action",
      fields: [
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
    {
      type: "input-file",
      name: "image1",
      label: "Image 1",
    },
    {
      type: "input-file",
      name: "image2",
      label: "Image 2",
    },
    {
      type: "input-file",
      name: "image3",
      label: "Image 3",
    },
  ],
};
