import type {
  FeaturesList4Props,
  FeaturesList4Slug,
} from "@repo/components/types/template-types/features-list-4";
import type { FormFields } from "../types";

export const FEATURES_LIST_4_FORM_SCHEMA: FormFields<
  FeaturesList4Slug,
  FeaturesList4Props
> = {
  slug: "features-list-4",
  fields: [
    {
      type: "field-group",
      name: "",
      label: "Feature List",
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
          type: "field-array",
          name: "features",
          addFieldText: "Add Feature",
          labelPrefix: "Feature",
          fields: [
            {
              type: "iconpicker",
              name: "icon",
              label: "Icon",
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
