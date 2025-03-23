import type {
  Step3Props,
  Step3Slug,
} from "@hooore/components/types/template-types/step-3";
import type { FormFields } from "../types";

export const STEP_3_FORM_SCHEMA: FormFields<Step3Slug, Step3Props> = {
  slug: "step-3",
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
