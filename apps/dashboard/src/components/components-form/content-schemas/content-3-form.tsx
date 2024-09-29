import type {
  Content3Props,
  Content3Slug,
} from "@repo/components/types/template-types/content-3";
import type { FormFields } from "../types";

export const CONTENT_3_FORM_SCHEMA: FormFields<Content3Slug, Content3Props> = {
  slug: "content-3",
  fields: [
    {
      type: "textarea",
      name: "description",
      label: "Description",
      placeholder: "Enter your description here",
    },
  ],
};
