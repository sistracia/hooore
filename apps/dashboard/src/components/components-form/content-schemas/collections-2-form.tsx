import type {
  Collections2Props,
  Collections2Slug,
} from "@hooore/components/types/template-types/collections-2";
import type { FormFields } from "../types";

export const COLLECTIONS_2_FORM_SCHEMA: FormFields<
  Collections2Slug,
  Collections2Props
> = {
  slug: "collections-2",
  fields: [
    {
      type: "textarea",
      name: "headline",
      label: "Headline",
      placeholder: "Enter the headline here",
    },
    {
      type: "textarea",
      label: "Description",
      name: "description",
      placeholder: "Enter the description here",
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
