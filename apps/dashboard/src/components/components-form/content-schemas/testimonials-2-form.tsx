import type {
  Testimonials2Props,
  Testimonials2Slug,
} from "@repo/components/types/template-types/testimonials-2";
import type { FormFields } from "../types";

export const TESTIMONIALS_2_FORM_SCHEMA: FormFields<
  Testimonials2Slug,
  Testimonials2Props
> = {
  slug: "testimonials-2",
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
      name: "testimonials",
      addFieldText: "Add Tesimonial",
      labelPrefix: "Testimonial",
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
          type: "input-text",
          name: "name",
          label: "Name",
          placeholder: "Enter the name here",
        },
      ],
    },
  ],
};
