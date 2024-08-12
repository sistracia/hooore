import {
  TemplateContentContentSchema,
  TemplateContentSlug,
} from "./template-content.definition";

export type PageContentSchema = {
  id: string;
  name: string;
  content: TemplateContentContentSchema;
  slug: TemplateContentSlug;
};
