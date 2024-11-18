import type {
  Footer2Props,
  Footer2Slug,
} from "@repo/components/types/template-types/footer-2";
import type { FormFields } from "../types";

export const FOOTER_2_FORM_SCHEMA: FormFields<Footer2Slug, Footer2Props> = {
  slug: "footer-2",
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
      placeholder: "Enter the description here",
    },
    {
      type: "textarea",
      name: "copyright",
      label: "Copyright",
      placeholder: "Enter the copyright here",
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
    {
      type: "field-array",
      name: "categories",
      addFieldText: "Add Category",
      labelPrefix: "Category",
      fields: [
        {
          type: "textarea",
          name: "headline",
          label: "Headline",
          placeholder: "Enter the headline here",
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
      ],
    },
  ],
};
