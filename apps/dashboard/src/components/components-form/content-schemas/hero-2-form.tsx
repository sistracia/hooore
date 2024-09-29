import type {
  Hero2Props,
  Hero2Slug,
} from "@repo/components/types/template-types/hero-2";
import type { FormFields } from "../types";

export const HERO_2_FORM_SCHEMA: FormFields<Hero2Slug, Hero2Props> = {
  slug: "hero-2",
  fields: [
    {
      type: "input-text",
      label: "Sub-Headline",
      name: "sub_headline",
      placeholder: "",
    },
    {
      type: "input-text",
      label: "Headline",
      name: "headline",
      placeholder: "",
    },
    {
      type: "textarea",
      label: "Description",
      name: "description",
      placeholder: "",
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
          type: "input-text",
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
          type: "input-text",
          label: "Link",
          name: "right_button_link",
          placeholder: "Enter the link here",
        },
      ],
    },
  ],
};
