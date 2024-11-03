import type {
  CallToAction3Props,
  CallToAction3Slug,
} from "@repo/components/types/template-types/call-to-action-3";
import type { FormFields } from "../types";

export const CALL_TO_ACTION_3_FORM_SCHEMA: FormFields<
  CallToAction3Slug,
  CallToAction3Props
> = {
  slug: "call-to-action-3",
  fields: [
    {
      type: "input-file",
      label: "Background",
      name: "background",
    },
    {
      type: "textarea",
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
          label: "Button Label",
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
