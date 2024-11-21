import type {
  Pricing3Props,
  Pricing3Slug,
} from "@repo/components/types/template-types/pricing-3";
import type { FormFields } from "../types";

export const PRICING_3_FORM_SCHEMA: FormFields<Pricing3Slug, Pricing3Props> = {
  slug: "pricing-3",
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
      label: "Main Card",
      fields: [
        {
          type: "input-text",
          name: "main_card_title",
          label: "Title",
          placeholder: "Enter the title here",
        },
        {
          type: "input-text",
          name: "main_card_description",
          label: "Description",
          placeholder: "Enter the description here",
        },
        {
          type: "input-text",
          name: "main_card_price_symbol",
          label: "Price Symbol",
          placeholder: "Enter the price symbol here",
        },
        {
          type: "input-text",
          name: "main_card_price",
          label: "Price",
          placeholder: "Enter the price here",
        },
        {
          type: "input-text",
          name: "main_card_price_text",
          label: "Price Description",
          placeholder: "Enter the price description here",
        },
        {
          type: "field-array",
          name: "main_card_list",
          addFieldText: "Add Feature",
          labelPrefix: "Feature List",
          fields: [
            {
              type: "input-text",
              name: "text",
            },
          ],
        },
        {
          type: "input-text",
          name: "main_card_cta_button_label",
          label: "Button Label",
          placeholder: "Enter the label here",
        },
        {
          type: "autocomplete-link",
          name: "main_card_cta_link",
          label: "Link",
          placeholder: "Enter the link here",
        },
      ],
    },
    {
      type: "field-group",
      name: "",
      label: "Second Card",
      fields: [
        {
          type: "input-text",
          name: "second_card_title",
          label: "Title",
          placeholder: "Enter the title here",
        },
        {
          type: "input-text",
          name: "second_card_description",
          label: "Description",
          placeholder: "Enter the description here",
        },
        {
          type: "input-text",
          name: "second_card_price_symbol",
          label: "Price Symbol",
          placeholder: "Enter the price symbol here",
        },
        {
          type: "input-text",
          name: "second_card_price",
          label: "Price",
          placeholder: "Enter the price here",
        },
        {
          type: "input-text",
          name: "second_card_price_text",
          label: "Price Description",
          placeholder: "Enter the price description here",
        },
        {
          type: "field-array",
          name: "second_card_list",
          addFieldText: "Add Feature",
          labelPrefix: "Feature List",
          fields: [
            {
              type: "input-text",
              name: "text",
            },
          ],
        },
        {
          type: "input-text",
          name: "second_card_cta_button_label",
          label: "Button Label",
          placeholder: "Enter the label here",
        },
        {
          type: "autocomplete-link",
          name: "second_card_cta_link",
          label: "Link",
          placeholder: "Enter the link here",
        },
      ],
    },
    {
      type: "field-group",
      name: "",
      label: "Third Card",
      fields: [
        {
          type: "input-text",
          name: "third_card_title",
          label: "Title",
          placeholder: "Enter the title here",
        },
        {
          type: "input-text",
          name: "third_card_description",
          label: "Description",
          placeholder: "Enter the description here",
        },
        {
          type: "input-text",
          name: "third_card_price_symbol",
          label: "Price Symbol",
          placeholder: "Enter the price symbol here",
        },
        {
          type: "input-text",
          name: "third_card_price",
          label: "Price",
          placeholder: "Enter the price here",
        },
        {
          type: "input-text",
          name: "third_card_price_text",
          label: "Price Description",
          placeholder: "Enter the price description here",
        },
        {
          type: "field-array",
          name: "third_card_list",
          addFieldText: "Add Feature",
          labelPrefix: "Feature List",
          fields: [
            {
              type: "input-text",
              name: "text",
            },
          ],
        },
        {
          type: "input-text",
          name: "third_card_cta_button_label",
          label: "Button Label",
          placeholder: "Enter the label here",
        },
        {
          type: "autocomplete-link",
          name: "third_card_cta_link",
          label: "Link",
          placeholder: "Enter the link here",
        },
      ],
    },
  ],
};
