import type {
  Blog3Props,
  Blog3Slug,
} from "@hooore/components/types/template-types/blog-3";
import type { FormFields } from "../types";

export const BLOG_3_FORM_SCHEMA: FormFields<Blog3Slug, Blog3Props> = {
  slug: "blog-3",
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
          type: "textarea",
          name: "description",
          label: "Description",
          placeholder: "Enter the description here",
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
