import type {
  Content4Props,
  Content4Slug,
} from "@repo/components/types/template-types/content-4";
import type { FormFields } from "../types";

export const CONTENT_4_FORM_SCHEMA: FormFields<Content4Slug, Content4Props> = {
  slug: "content-4",
  fields: [
    {
      type: "input-file",
      name: "image",
      label: "Image",
    },
    {
      type: "textarea",
      label: "Sub-Headline",
      name: "sub_headline",
      placeholder: "Enter the sub-headline here",
    },
    {
      type: "textarea",
      label: "Headline",
      name: "headline",
      placeholder: "Enter the headline here",
    },
    {
      type: "textarea",
      label: "Description",
      name: "description",
      placeholder: "Enter the description here",
    },
    {
      type: "field-group",
      name: "",
      label: "Item List",
      fields: [
        {
          type: "field-array",
          name: "items",
          labelPrefix: "Item",
          addFieldText: "Add Item",
          fields: [
            {
              type: "textarea",
              label: "Headline",
              name: "headline",
              placeholder: "Enter the headline here",
            },
            {
              type: "textarea",
              label: "Description",
              name: "description",
              placeholder: "Enter the description here",
            },
          ],
        },
      ],
    },
  ],
};
