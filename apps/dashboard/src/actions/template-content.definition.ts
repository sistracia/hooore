import type {
  PageContentComponentProps,
  PageContentComponentSlug,
} from "@repo/components/types/page-content";
import type { TemplateCode } from "./project.definition";

export type TemplateContentContentSchema = PageContentComponentProps;
export type TemplateContentSlug = PageContentComponentSlug;

export type TemplateContentSchema = {
  id: string;
  name: string;
  content: TemplateContentContentSchema;
  slug: TemplateContentSlug;
  code: TemplateCode;
};
