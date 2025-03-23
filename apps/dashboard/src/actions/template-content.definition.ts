import type {
  PageContentComponentProps,
  PageContentComponentSlug,
} from "@hooore/components/types/page-content";

export type TemplateContentContentSchema = PageContentComponentProps;
export type TemplateContentSlug = PageContentComponentSlug;

export type TemplateContentSchema = {
  id: string;
  name: string;
  content: TemplateContentContentSchema;
  slug: TemplateContentSlug;
};
