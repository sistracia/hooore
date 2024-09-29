import type {
  Faq1Props,
  Faq1Slug,
} from "@repo/components/types/template-types/faq-1";
import type { FormFields } from "../types";

export const FAQ_1_FORM_SCHEMA: FormFields<Faq1Slug, Faq1Props> = {
  slug: "faq-1",
  fields: [
    {
      type: "input-text",
      name: "tag",
      label: "Tag",
      placeholder: "Enter the tag here",
    },
    {
      type: "input-text",
      name: "headline",
      label: "Headline",
      placeholder: "Enter your headline here",
    },
    {
      type: "textarea",
      name: "caption",
      label: "Caption",
      placeholder: "Enter your caption here",
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
