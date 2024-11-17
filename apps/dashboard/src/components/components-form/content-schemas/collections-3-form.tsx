import type {
  Collections3Props,
  Collections3Slug,
} from "@repo/components/types/template-types/collections-3";
import type { FormFields } from "../types";

export const COLLECTIONS_3_FORM_SCHEMA: FormFields<
  Collections3Slug,
  Collections3Props
> = {
  slug: "collections-3",
  fields: [
    {
      type: "textarea",
      name: "headline",
      label: "Headline",
      placeholder: "Enter the headline here",
    },
    {
      type: "field-array",
      name: "collections",
      addFieldText: "Add Collection",
      labelPrefix: "Collections",
      fields: [
        {
          type: "input-file",
          name: "image",
          label: "Image",
        },
        {
          type: "input-text",
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
        {
          type: "input-text",
          name: "title",
          label: "Title",
          placeholder: "Enter the title here",
        },
      ],
    },
  ],
};
