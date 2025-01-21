import type {
  Team3Props,
  Team3Slug,
} from "@hooore/components/types/template-types/team-3";
import type { FormFields } from "../types";

export const TEAM_3_FORM_SCHEMA: FormFields<Team3Slug, Team3Props> = {
  slug: "team-3",
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
      name: "teams",
      addFieldText: "Add Team",
      labelPrefix: "Team",
      fields: [
        {
          type: "input-file",
          name: "image",
          label: "Image",
        },
        {
          type: "input-text",
          name: "name",
          label: "Name",
          placeholder: "Enter the name here",
        },
        {
          type: "input-text",
          name: "position",
          label: "Position",
          placeholder: "Enter the position here",
        },
      ],
    },
  ],
};
