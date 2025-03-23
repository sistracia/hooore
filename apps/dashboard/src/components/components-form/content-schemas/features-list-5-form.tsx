import type {
  FeaturesList5Props,
  FeaturesList5Slug,
} from "@hooore/components/types/template-types/features-list-5";
import type { FormFields } from "../types";

export const FEATURES_LIST_5_FORM_SCHEMA: FormFields<
  FeaturesList5Slug,
  FeaturesList5Props
> = {
  slug: "features-list-5",
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
      type: "field-group",
      name: "",
      fields: [
        {
          type: "input-text",
          label: "Button Label",
          name: "left_button_label",
          placeholder: "Enter the label here",
        },
        {
          type: "autocomplete-link",
          label: "Link",
          name: "left_button_link",
          placeholder: "Enter the link here",
        },
        {
          type: "input-text",
          label: "Button Label",
          name: "right_button_label",
          placeholder: "Enter the label here",
        },
        {
          type: "autocomplete-link",
          label: "Link",
          name: "right_button_link",
          placeholder: "Enter the link here",
        },
      ],
    },
    {
      type: "field-array",
      name: "features",
      addFieldText: "Add Feature",
      labelPrefix: "Feature",
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
      ],
    },
  ],
};
