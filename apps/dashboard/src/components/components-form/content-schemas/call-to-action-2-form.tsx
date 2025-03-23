import type {
  CallToAction2Props,
  CallToAction2Slug,
} from "@hooore/components/types/template-types/call-to-action-2";
import type { FormFields } from "../types";

export const CALL_TO_ACTION_2_FORM_SCHEMA: FormFields<
  CallToAction2Slug,
  CallToAction2Props
> = {
  slug: "call-to-action-2",
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
    {
      type: "input-file",
      label: "Background",
      name: "background",
    },
  ],
};
