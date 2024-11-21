import type {
  Hero6Props,
  Hero6Slug,
} from "@repo/components/types/template-types/hero-6";
import type { FormFields } from "../types";

export const HERO_6_FORM_SCHEMA: FormFields<Hero6Slug, Hero6Props> = {
  slug: "hero-6",
  fields: [
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
                type: "autocomplete-link",
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
