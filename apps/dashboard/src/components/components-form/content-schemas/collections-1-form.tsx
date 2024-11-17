import type {
  Collections1Props,
  Collections1Slug,
} from "@repo/components/types/template-types/collections-1";
import type { FormFields } from "../types";

export const COLLECTIONS_1_FORM_SCHEMA: FormFields<
  Collections1Slug,
  Collections1Props
> = {
  slug: "collections-1",
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
      label: "Call To Action",
      fields: [
        {
          type: "input-text",
          name: "cta_button_label",
          label: "Button Label",
          placeholder: "Enter the label here",
        },
        {
          type: "input-text",
          name: "cta_link",
          label: "Link",
          placeholder: "Enter the link here",
        },
      ],
    },
    {
      type: "field-array",
      name: "collections",
      addFieldText: "Add Collection",
      labelPrefix: "Collections",
      fields: [
        {
          type: "input-file",
          name: "image",
          label: "Image",
        },
        {
          type: "input-text",
          name: "link",
          label: "Link",
          placeholder: "Enter the link here",
        },
        {
          type: "input-text",
          name: "tag",
          label: "Tag",
          placeholder: "Enter the tag here",
        },
        {
          type: "input-text",
          name: "title",
          label: "Title",
          placeholder: "Enter the title here",
        },
      ],
    },
  ],
};
