import type {
  Stats3Props,
  Stats3Slug,
} from "@hooore/components/types/template-types/stats-3";
import type { FormFields } from "../types";

export const STATS_3_FORM_SCHEMA: FormFields<Stats3Slug, Stats3Props> = {
  slug: "stats-3",
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
      type: "input-file",
      name: "image",
      label: "Image",
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
