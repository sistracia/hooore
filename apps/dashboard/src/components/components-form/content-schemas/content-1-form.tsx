import type {
  Content1Props,
  Content1Slug,
} from "@repo/components/types/template-types/content-1";
import type { FormFields } from "../types";

export const CONTENT_1_FORM_SCHEMA: FormFields<Content1Slug, Content1Props> = {
  slug: "content-1",
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
  ],
};
