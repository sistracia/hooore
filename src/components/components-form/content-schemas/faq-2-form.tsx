import type {
  Faq2Props,
  Faq2Slug,
} from "@hooore/components/types/template-types/faq-2";
import type { FormFields } from "../types";

export const FAQ_2_FORM_SCHEMA: FormFields<Faq2Slug, Faq2Props> = {
  slug: "faq-2",
  fields: [
    {
      type: "textarea",
      name: "headline",
      label: "Headline",
      placeholder: "Enter the headline here",
    },
    {
      type: "textarea",
      name: "caption",
      label: "Caption",
      placeholder: "Enter the caption here",
    },
    {
      type: "field-group",
      name: "",
      label: "FAQ",
      fields: [
        {
          type: "field-sortable-array",
          name: "faq",
          addFieldText: "Add Question",
          sortitem: {
            initialCollapseFields: ["question", "answer"],
            labelField: "question",
            fields: [
              {
                type: "input-text",
                name: "question",
                label: "Question",
                placeholder: "Enter the question here",
              },
              {
                type: "textarea",
                name: "answer",
                label: "Answer",
                placeholder: "Enter the answer here",
              },
            ],
          },
        },
      ],
    },
  ],
};
