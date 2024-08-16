import type { TemplateCode } from "./template.definition";
import type {
  TemplateContentContentSchema,
  TemplateContentSlug,
} from "./template-content.definition";

export type PageSchema = {
  id: string;
  name: string;
  slug: string;
  published: boolean;
  last_edited: Date;
  create_date: Date;
  type: string;
  project_id: string;
  is_home: boolean;
};

export type PageContent = {
  id: string;
  name: string;
  type: string;
  page_slug: string;
  project_id: string;
  content: TemplateContentContentSchema;
  code: TemplateCode;
  slug: TemplateContentSlug;
  content_name: string;
  template_content_id: string;
  last_edited: Date;
};

export type PageLink = Pick<PageContent, "id" | "name" | "slug">;
