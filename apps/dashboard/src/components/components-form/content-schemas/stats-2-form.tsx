import type {
  Stats2Props,
  Stats2Slug,
} from "@hooore/components/types/template-types/stats-2";
import type { FormFields } from "../types";

export const STATS_2_FORM_SCHEMA: FormFields<Stats2Slug, Stats2Props> = {
  slug: "stats-2",
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
