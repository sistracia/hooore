import type {
  Hero3Props,
  Hero3Slug,
} from "@hooore/components/types/template-types/hero-3";
import type { FormFields } from "../types";

export const HERO_3_FORM_SCHEMA: FormFields<Hero3Slug, Hero3Props> = {
  slug: "hero-3",
  fields: [
    {
      type: "input-file",
      name: "image",
      label: "Background",
    },
    {
      type: "textarea",
      name: "sub_headline",
      label: "Sub-Headline",
      placeholder: "Enter the sub-headline here",
    },
    {
      type: "textarea",
      name: "headline",
      label: "Headline",
      placeholder: "Enter the headline here",
    },
    {
      type: "field-group",
      name: "",
      label: "Left Button",
      fields: [
        {
          type: "input-text",
          name: "left_button_label",
          label: "Label",
          placeholder: "Enter the label here",
        },
        {
          type: "autocomplete-link",
          name: "left_button_link",
          label: "Link",
          placeholder: "Enter the link here",
        },
      ],
    },
    {
      type: "field-group",
      name: "",
      label: "Right Button",
      fields: [
        {
          type: "input-text",
          name: "right_button_label",
          label: "Label",
          placeholder: "Enter the label here",
        },
        {
          type: "autocomplete-link",
          name: "right_button_link",
          label: "Link",
          placeholder: "Enter the link here",
        },
      ],
    },
  ],
};
