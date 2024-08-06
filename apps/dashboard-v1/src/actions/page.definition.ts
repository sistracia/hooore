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
  content: TemplateContentContentSchema;
  code: TemplateCode;
  slug: TemplateContentSlug;
};
