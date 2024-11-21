import type {
  CallToAction6Props,
  CallToAction6Slug,
} from "@repo/components/types/template-types/call-to-action-6";
import type { FormFields } from "../types";

export const CALL_TO_ACTION_6_FORM_SCHEMA: FormFields<
  CallToAction6Slug,
  CallToAction6Props
> = {
  slug: "call-to-action-6",
  fields: [
    {
      type: "textarea",
      label: "Sub-Headline",
      name: "sub_headline",
      placeholder: "Enter the sub-headline here",
    },
    {
      type: "textarea",
      label: "Headline",
      name: "headline",
      placeholder: "Enter the headline here",
    },

    {
      type: "field-group",
      name: "",
      fields: [
        {
          type: "input-text",
          label: "Button Label",
          name: "left_button_label",
          placeholder: "Enter the label here",
        },
        {
          type: "autocomplete-link",
          label: "Link",
          name: "left_button_link",
          placeholder: "Enter the link here",
        },
        {
          type: "input-text",
          label: "Button Label",
          name: "right_button_label",
          placeholder: "Enter the label here",
        },
        {
          type: "autocomplete-link",
          label: "Link",
          name: "right_button_link",
          placeholder: "Enter the link here",
        },
      ],
    },
  ],
};
