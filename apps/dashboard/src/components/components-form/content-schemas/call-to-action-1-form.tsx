import type {
  CallToAction1Props,
  CallToAction1Slug,
} from "@repo/components/types/template-types/call-to-action-1";
import type { FormFields } from "../types";

export const CALL_TO_ACTION_1_FORM_SCHEMA: FormFields<
  CallToAction1Slug,
  CallToAction1Props
> = {
  slug: "call-to-action-1",
  fields: [
    {
      type: "input-text",
      label: "Headline",
      name: "headline",
      placeholder: "Enter your headline here",
    },
    {
      type: "textarea",
      label: "Description",
      name: "description",
      placeholder: "Enter your description here",
    },
    {
      type: "field-group",
      name: "",
      label: "Call To Action",
      children: [
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
    {
      type: "input-file",
      label: "Background",
      name: "background",
    },
  ],
};
