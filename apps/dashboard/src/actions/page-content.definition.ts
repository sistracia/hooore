import type {
  TemplateContentContentSchema,
  TemplateContentSchema,
} from "./template-content.definition";

export type PageContentSchema = {
  id: string;
  content: TemplateContentContentSchema;
  page_id: string;
  template_content_id: string;
  order: number;
};

export type SnippetContentSchema = TemplateContentSchema & {
  template_content_id: string;
};
