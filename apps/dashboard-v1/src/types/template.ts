import type { PageContentSchema } from "@/actions/page-content.definition";
import { TemplateContentSchema } from "@/actions/template-content.definition";

export type AvailableTemplate = {
  snippets: PageContentSchema[];
  templates: {
    name: string;
    templates: TemplateContentSchema[];
  }[];
};
