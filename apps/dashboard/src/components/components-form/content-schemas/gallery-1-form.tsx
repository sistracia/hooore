import type {
  Gallery1Props,
  Gallery1Slug,
} from "@repo/components/types/template-types/gallery-1";
import type { FormFields } from "../types";

export const GALLERY_1_FORM_SCHEMA: FormFields<Gallery1Slug, Gallery1Props> = {
  slug: "gallery-1",
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
      name: "images",
      addFieldText: "Add Image",
      labelPrefix: "Gallery",
      fields: [
        {
          type: "input-file",
          name: "image",
          label: "Image",
        },
        {
          type: "autocomplete-link",
          name: "link",
          label: "Link",
          placeholder: "Enter the link here",
        },
        {
          type: "input-text",
          name: "tag",
          label: "Tag",
          placeholder: "Enter the tag here",
        },
      ],
    },
  ],
};
