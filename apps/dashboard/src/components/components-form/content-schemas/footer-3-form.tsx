import type {
  Footer3Props,
  Footer3Slug,
} from "@repo/components/types/template-types/footer-3";
import type { FormFields } from "../types";

export const FOOTER_3_FORM_SCHEMA: FormFields<Footer3Slug, Footer3Props> = {
  slug: "footer-3",
  fields: [
    {
      type: "textarea",
      name: "copyright",
      label: "Copyright",
      placeholder: "Enter the copyright here",
    },
    {
      type: "field-group",
      name: "",
      label: "Links",
      fields: [
        {
          type: "field-sortable-array",
          name: "links",
          addFieldText: "Add Link",
          sortitem: {
            initialCollapseFields: ["label", "link"],
            labelField: "label",
            labelIcon: false,
            fields: [
              {
                type: "input-text",
                name: "label",
                label: "Label",
                placeholder: "Enter the label here",
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
