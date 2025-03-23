import type {
  Gallery3Props,
  Gallery3Slug,
} from "@hooore/components/types/template-types/gallery-3";
import type { FormFields } from "../types";

export const GALLERY_3_FORM_SCHEMA: FormFields<Gallery3Slug, Gallery3Props> = {
  slug: "gallery-3",
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
      type: "field-group",
      name: "",
      label: "Call To Action",
      fields: [
        {
          type: "input-text",
          name: "cta_button_label",
          label: "Button Label",
          placeholder: "Enter the label here",
        },
        {
          type: "autocomplete-link",
          name: "cta_link",
          label: "Link",
          placeholder: "Enter the link here",
        },
      ],
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
