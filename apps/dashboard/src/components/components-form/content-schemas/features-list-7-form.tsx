import type {
  FeaturesList7Props,
  FeaturesList7Slug,
} from "@hooore/components/types/template-types/features-list-7";
import type { FormFields } from "../types";

export const FEATURES_LIST_7_FORM_SCHEMA: FormFields<
  FeaturesList7Slug,
  FeaturesList7Props
> = {
  slug: "features-list-7",
  fields: [
    {
      type: "textarea",
      label: "Headline",
      name: "headline",
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
      labelPrefix: "Feature Left Side",
      fields: [
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
};
