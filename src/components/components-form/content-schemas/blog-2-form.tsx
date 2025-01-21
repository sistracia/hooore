import type {
  Blog2Props,
  Blog2Slug,
} from "@hooore/components/types/template-types/blog-2";
import type { FormFields } from "../types";

export const BLOG_2_FORM_SCHEMA: FormFields<Blog2Slug, Blog2Props> = {
  slug: "blog-2",
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
      name: "blog",
      addFieldText: "Add Blog",
      labelPrefix: "Blog",
      fields: [
        {
          type: "autocomplete-link",
          name: "link",
          label: "Link",
          placeholder: "Enter the author link here",
        },
        {
          type: "input-file",
          name: "image",
          label: "Image",
        },
        {
          type: "input-text",
          name: "title",
          label: "Title",
          placeholder: "Enter the title here",
        },
        {
          type: "input-text",
          name: "date",
          label: "Date",
          placeholder: "Enter the date here",
        },
      ],
    },
  ],
};
