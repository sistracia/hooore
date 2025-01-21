import type {
  Hero2Props,
  Hero2Slug,
} from "@hooore/components/types/template-types/hero-2";
import type { FormFields } from "../types";

export const HERO_2_FORM_SCHEMA: FormFields<Hero2Slug, Hero2Props> = {
  slug: "hero-2",
  fields: [
    {
      type: "input-file",
      name: "image",
      label: "Image",
    },
    {
      type: "textarea",
      label: "Sub-Headline",
      name: "sub_headline",
      placeholder: "Enter the sub-headline here",
    },
    {
      type: "textarea",
      label: "Headline",
      name: "headline",
      placeholder: "Enter the headline here",
    },
    {
      type: "textarea",
      label: "Description",
      name: "description",
      placeholder: "Enter the description here",
    },
    {
      type: "field-group",
      name: "",
      fields: [
        {
          type: "input-text",
          label: "Button Label",
          name: "left_button_label",
          placeholder: "Enter the label here",
        },
        {
          type: "autocomplete-link",
          label: "Link",
          name: "left_button_link",
          placeholder: "Enter the link here",
        },
        {
          type: "input-text",
          label: "Button Label",
          name: "right_button_label",
          placeholder: "Enter the label here",
        },
        {
          type: "autocomplete-link",
          label: "Link",
          name: "right_button_link",
          placeholder: "Enter the link here",
        },
      ],
    },
  ],
};
