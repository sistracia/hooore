import type {
  HowItWorks1Props,
  HowItWorks1Slug,
} from "@repo/components/types/template-types/how-it-works-1";
import type { FormFields } from "../types";

export const HOW_IT_WORKS_1_FORM_SCHEMA: FormFields<
  HowItWorks1Slug,
  HowItWorks1Props
> = {
  slug: "how-it-works-1",
  fields: [
    {
      type: "field-array",
      name: "step",
      addFieldText: "Add Step",
      labelPrefix: "Step",
      fields: [
        {
          type: "input-text",
          name: "headine",
          label: "Headline",
          placeholder: "Enter the headline here",
        },
        {
          type: "field-group",
          name: "",
          label: "Task",
          fields: [
            {
              name: "task",
              type: "field-sortable-array",
              addFieldText: "Add Task",
              sortitem: {
                initialCollapseFields: ["name", "description"],
                labelField: "name",
                fields: [
                  {
                    type: "input-text",
                    name: "name",
                    label: "Task",
                    placeholder: "Enter the task here",
                  },
                  {
                    type: "textarea",
                    name: "description",
                    label: "Description",
                    placeholder: "Enter the description here",
                  },
                ],
              },
            },
          ],
        },
      ],
    },
  ],
};
