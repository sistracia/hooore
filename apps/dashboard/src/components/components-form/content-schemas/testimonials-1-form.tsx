import type {
  Testimonials1Props,
  Testimonials1Slug,
} from "@repo/components/types/template-types/testimonials-1";
import type { FormFields } from "../types";

export const TESTIMONIALS_1_FORM_SCHEMA: FormFields<
  Testimonials1Slug,
  Testimonials1Props
> = {
  slug: "testimonials-1",
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
        {
          type: "input-text",
          name: "position",
          label: "Position",
          placeholder: "Enter the position here",
        },
      ],
    },
  ],
};
