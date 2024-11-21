import type {
  FeaturesList1Props,
  FeaturesList1Slug,
} from "@repo/components/types/template-types/features-list-1";
import type { FormFields } from "../types";

export const FEATURES_LIST_1_FORM_SCHEMA: FormFields<
  FeaturesList1Slug,
  FeaturesList1Props
> = {
  slug: "features-list-1",
  fields: [
    {
      type: "field-group",
      name: "",
      label: "Feature List",
      fields: [
        {
          type: "input-text",
          name: "tag",
          label: "Tag",
          placeholder: "Enter the tag here",
        },
        {
          type: "textarea",
          name: "headline",
          label: "Headline",
          placeholder: "Enter the headline here",
        },
        {
          type: "textarea",
          name: "description",
          label: "Description",
          placeholder: "Enter the description here",
        },
        {
          type: "field-array",
          name: "features",
          addFieldText: "Add Feature",
          labelPrefix: "Feature",
          fields: [
            {
              type: "input-file",
              name: "image",
              label: "Image",
            },
            {
              type: "textarea",
              name: "headline",
              label: "Headline",
              placeholder: "Enter the headline here",
            },
            {
              type: "textarea",
              name: "description",
              label: "Description",
              placeholder: "Enter the description here",
            },
            {
              type: "field-array",
              name: "features",
              addFieldText: "Add List",
              labelPrefix: "Feature",
              fields: [
                {
                  type: "textarea",
                  name: "name",
                  placeholder: "Type here...",
                },
              ],
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
                  type: "autocomplete-link",
                  name: "cta_link",
                  label: "Link",
                  placeholder: "Enter the link here",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
