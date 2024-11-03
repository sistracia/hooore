import type {
  Hero5Props,
  Hero5Slug,
} from "@repo/components/types/template-types/hero-5";
import type { FormFields } from "../types";

export const HERO_5_FORM_SCHEMA: FormFields<Hero5Slug, Hero5Props> = {
  slug: "hero-5",
  fields: [
    {
      type: "input-file",
      name: "image",
      label: "Background",
    },
    {
      type: "textarea",
      name: "sub_headline",
      label: "Sub Headline",
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
    {
      type: "field-group",
      name: "",
      label: "Social Media",
      fields: [
        {
          type: "field-sortable-array",
          name: "socials",
          addFieldText: "Add Social Media",
          sortitem: {
            initialCollapseFields: ["slug", "link"],
            labelField: "slug",
            labelIcon: true,
            fields: [
              {
                type: "iconpicker",
                name: "slug",
                label: "Icon",
              },
              {
                type: "input-text",
                name: "link",
                label: "Link",
                placeholder: "Enter the link here",
              },
            ],
          },
        },
      ],
    },
  ],
};
