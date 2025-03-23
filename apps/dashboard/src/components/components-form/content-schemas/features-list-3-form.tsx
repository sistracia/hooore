import type {
  FeaturesList3Props,
  FeaturesList3Slug,
} from "@hooore/components/types/template-types/features-list-3";
import type { FormFields } from "../types";

export const FEATURES_LIST_3_FORM_SCHEMA: FormFields<
  FeaturesList3Slug,
  FeaturesList3Props
> = {
  slug: "features-list-3",
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
