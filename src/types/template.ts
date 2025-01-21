import type { SnippetContentSchema } from "@/actions/page-content.definition";
import type { TemplateContentSchema } from "@/actions/template-content.definition";

export type AvailableTemplate = {
  snippets: SnippetContentSchema[];
  templates: {
    name: string;
    templates: TemplateContentSchema[];
  }[];
};
