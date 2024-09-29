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
      style: "with-label",
      addFieldText: "Add Content",
      children: [
        {
          type: "input-text",
          label: "Headline",
          name: `headline`,
          placeholder: "Enter your headline here",
        },
        {
          type: "textarea",
          label: "Description",
          name: `description`,
          placeholder: "Enter your description here",
        },
      ],
    },
  ],
};
