import type {
  Footer1Props,
  Footer1Slug,
} from "@hooore/components/types/template-types/footer-1";
import type { FormFields } from "../types";

export const FOOTER_1_FORM_SCHEMA: FormFields<Footer1Slug, Footer1Props> = {
  slug: "footer-1",
  fields: [
    {
      type: "field-group",
      name: "",
      label: "Link",
      fields: [
        {
          type: "field-sortable-array",
          name: "link",
          addFieldText: "Add Link",
          sortitem: {
            initialCollapseFields: ["label", "link"],
            labelField: "label",
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
