import type {
  Content2Props,
  Content2Slug,
} from "@repo/components/types/template-types/content-2";
import type { FormFields } from "../types";

export const CONTENT_2_FORM_SCHEMA: FormFields<Content2Slug, Content2Props> = {
  slug: "content-2",
  fields: [
    {
      type: "field-array",
      name: "contents",
      labelPrefix: "Content",
      addFieldText: "Add Content",
      fields: [
        {
          type: "input-text",
          label: "Headline",
          name: `headline`,
          placeholder: "Enter the headline here",
        },
        {
          type: "textarea",
          label: "Description",
          name: `description`,
          placeholder: "Enter the description here",
        },
      ],
    },
  ],
};
