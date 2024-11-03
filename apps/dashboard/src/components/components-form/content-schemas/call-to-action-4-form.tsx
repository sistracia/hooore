import type {
  CallToAction4Props,
  CallToAction4Slug,
} from "@repo/components/types/template-types/call-to-action-4";
import type { FormFields } from "../types";

export const CALL_TO_ACTION_4_FORM_SCHEMA: FormFields<
  CallToAction4Slug,
  CallToAction4Props
> = {
  slug: "call-to-action-4",
  fields: [
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
