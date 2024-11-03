import type {
  Hero1Props,
  Hero1Slug,
} from "@repo/components/types/template-types/hero-1";
import type { FormFields } from "../types";

export const HERO_1_FORM_SCHEMA: FormFields<Hero1Slug, Hero1Props> = {
  slug: "hero-1",
  fields: [
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
      type: "input-file",
      name: "background",
      label: "Background",
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
            labelIcon: true,
            initialCollapseFields: ["link", "slug"],
            labelField: "slug",
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
