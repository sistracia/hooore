import type {
  FeaturesList6Props,
  FeaturesList6Slug,
} from "@repo/components/types/template-types/features-list-6";
import type { FormFields } from "../types";

export const FEATURES_LIST_6_FORM_SCHEMA: FormFields<
  FeaturesList6Slug,
  FeaturesList6Props
> = {
  slug: "features-list-6",
  fields: [
    {
      type: "textarea",
      name: "tag",
      label: "Tag",
      placeholder: "Enter the tag here",
    },
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
      name: "features_left",
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
      ],
    },
    {
      type: "field-array",
      name: "features_right",
      addFieldText: "Add Feature",
      labelPrefix: "Feature Right Side",
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
