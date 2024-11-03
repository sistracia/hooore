import type {
  Content5Props,
  Content5Slug,
} from "@repo/components/types/template-types/content-5";
import type { FormFields } from "../types";

export const CONTENT_5_FORM_SCHEMA: FormFields<Content5Slug, Content5Props> = {
  slug: "content-5",
  fields: [
    {
      type: "textarea",
      label: "Sub-Headline",
      name: "sub_headline",
      placeholder: "Enter the sub-headline here",
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
      type: "input-file",
      name: "image",
      label: "Image",
    },
    {
      type: "input-text",
      label: "Video Link",
      name: "video",
      placeholder: "Enter the video link here",
    },
  ],
};
