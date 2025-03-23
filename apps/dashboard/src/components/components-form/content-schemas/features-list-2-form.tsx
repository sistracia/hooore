import type {
  FeaturesList2Props,
  FeaturesList2Slug,
} from "@hooore/components/types/template-types/features-list-2";
import type { FormFields } from "../types";

export const FEATURES_LIST_2_FORM_SCHEMA: FormFields<
  FeaturesList2Slug,
  FeaturesList2Props
> = {
  slug: "features-list-2",
  fields: [
    {
      type: "input-file",
      name: "background",
      label: "Image",
    },
    {
      type: "field-group",
      name: "",
      label: "Feature List",
      fields: [
        {
          type: "field-array",
          name: "features",
          addFieldText: "Add List",
          labelPrefix: "Feature",
          fields: [
            {
              type: "textarea",
              name: "name",
              placeholder: "Type here..",
            },
          ],
        },
      ],
    },
    {
      type: "field-group",
      name: "",
      label: "Logo",
      fields: [
        {
          type: "field-array",
          name: "images",
          addFieldText: "Add Logo",
          labelPrefix: "Logo",
          fields: [
            {
              type: "input-file",
              name: "image",
            },
          ],
        },
      ],
    },
  ],
};
