import type {
  Hero1Props,
  Hero1Slug,
} from "@repo/components/types/template-types/hero-1";
import type { FormFields } from "../types";

export const HERO_1_FORM_SCHEMA: FormFields<Hero1Slug, Hero1Props> = {
  slug: "hero-1",
  fields: [
    {
      type: "input-text",
      name: "sub_headline",
      label: "Sub-Headline",
      placeholder: "Enter your sub-headline",
    },
    {
      type: "input-text",
      name: "headline",
      label: "Headline",
      placeholder: "Enter your headline here",
    },
    {
      type: "input-file",
      name: "background",
      label: "Background",
      placeholder: "Enter your headline here",
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
