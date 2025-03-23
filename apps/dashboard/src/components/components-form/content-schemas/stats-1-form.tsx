import type {
  Stats1Props,
  Stats1Slug,
} from "@hooore/components/types/template-types/stats-1";
import type { FormFields } from "../types";

export const STATS_1_FORM_SCHEMA: FormFields<Stats1Slug, Stats1Props> = {
  slug: "stats-1",
  fields: [
    {
      type: "textarea",
      name: "headline",
      label: "Headline",
      placeholder: "Enter the headline here",
    },
    {
      type: "textarea",
      name: "description",
      label: "Description",
      placeholder: "Enter the description here",
    },
    {
      type: "field-array",
      name: "stats",
      addFieldText: "Add Image",
      labelPrefix: "Gallery",
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
