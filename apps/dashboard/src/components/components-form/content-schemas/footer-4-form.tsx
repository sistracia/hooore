import type {
  Footer4Props,
  Footer4Slug,
} from "@repo/components/types/template-types/footer-4";
import type { FormFields } from "../types";

export const FOOTER_4_FORM_SCHEMA: FormFields<Footer4Slug, Footer4Props> = {
  slug: "footer-4",
  fields: [
    {
      type: "input-file",
      name: "image",
      label: "Image",
    },
    {
      type: "textarea",
      name: "description",
      label: "Description",
      placeholder: "Enter the desciption here",
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
