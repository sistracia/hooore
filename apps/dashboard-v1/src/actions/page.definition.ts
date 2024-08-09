import {
  type TemplateCode,
  type TemplateContentContentSchema,
  type TemplateContentSlug,
} from "./template.definition";

export type PageSchema = {
  id: string;
  name: string;
  slug: string;
  published: boolean;
  last_edited: Date;
  create_date: Date;
  type: string;
};

export type PageContent = {
  id: string;
  name: string;
  page_slug: string;
  content: TemplateContentContentSchema;
  code: TemplateCode;
  slug: TemplateContentSlug;
  content_name: string;
  template_content_id: string;
  last_edited: Date;
};
