import type {
  Step2Props,
  Step2Slug,
} from "@repo/components/types/template-types/step-2";
import type { FormFields } from "../types";

export const STEP_2_FORM_SCHEMA: FormFields<Step2Slug, Step2Props> = {
  slug: "step-2",
  fields: [
    {
      type: "input-text",
      label: "Tag",
      name: "tag",
      placeholder: "Enter the tag here",
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
    {
      type: "field-array",
      name: "steps",
      addFieldText: "Add Step",
      labelPrefix: "Step",
      fields: [
        {
          type: "input-text",
          name: "value",
          label: "Value",
          placeholder: "Enter the value here",
        },
        {
          type: "input-text",
          name: "label",
          label: "Label",
          placeholder: "Enter the label here",
        },
      ],
    },
  ],
};
