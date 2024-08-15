import { TemplateContentSchema } from "@/actions/template-content.definition";

export type AvailableTemplate = {
  snippets: TemplateContentSchema[];
  templates: {
    name: string;
    templates: TemplateContentSchema[];
  }[];
};
