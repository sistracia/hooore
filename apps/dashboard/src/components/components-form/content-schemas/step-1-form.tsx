import type {
  Step1Props,
  Step1Slug,
} from "@repo/components/types/template-types/step-1";
import type { FormFields } from "../types";

export const STEP_1_FORM_SCHEMA: FormFields<Step1Slug, Step1Props> = {
  slug: "step-1",
  fields: [
    {
      type: "input-file",
      name: "image",
      label: "Image",
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
