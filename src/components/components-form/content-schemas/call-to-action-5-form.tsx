import type {
  CallToAction5Props,
  CallToAction5Slug,
} from "@hooore/components/types/template-types/call-to-action-5";
import type { FormFields } from "../types";

export const CALL_TO_ACTION_5_FORM_SCHEMA: FormFields<
  CallToAction5Slug,
  CallToAction5Props
> = {
  slug: "call-to-action-5",
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
