import type { PageSnippetSchema } from "@/actions/page-content.definition";
import { TemplateContentSchema } from "@/actions/template-content.definition";

export type AvailableTemplate = {
  snippets: PageSnippetSchema[];
  templates: {
    name: string;
    templates: TemplateContentSchema[];
  }[];
};
