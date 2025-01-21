import type {
  Testimonials3Props,
  Testimonials3Slug,
} from "@hooore/components/types/template-types/testimonials-3";
import type { FormFields } from "../types";

export const TESTIMONIALS_3_FORM_SCHEMA: FormFields<
  Testimonials3Slug,
  Testimonials3Props
> = {
  slug: "testimonials-3",
  fields: [
    {
      type: "textarea",
      name: "headline",
      label: "Headline",
      placeholder: "Enter the headline here",
    },
    {
      type: "field-array",
      name: "testimonials",
      addFieldText: "Add Tesimonial",
      labelPrefix: "Testimonial",
      fields: [
        {
          type: "textarea",
          name: "description",
          label: "Description",
          placeholder: "Enter the description here",
        },
        {
          type: "input-file",
          name: "image",
          label: "Image",
        },
        {
          type: "input-text",
          name: "name",
          label: "Name",
          placeholder: "Enter the name here",
        },
      ],
    },
  ],
};
