import type {
  Blog1Props,
  Blog1Slug,
} from "@hooore/components/types/template-types/blog-1";
import type { FormFields } from "../types";

export const BLOG_1_FORM_SCHEMA: FormFields<Blog1Slug, Blog1Props> = {
  slug: "blog-1",
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
        {
          type: "input-text",
          name: "author_name",
          label: "Author Name",
          placeholder: "Enter the author name here",
        },
        {
          type: "input-file",
          name: "author_image",
          label: "Authoer Image",
          placeholder: "Enter the author image here",
        },
      ],
    },
  ],
};
