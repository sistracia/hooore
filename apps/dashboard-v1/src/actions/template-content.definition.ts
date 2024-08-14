import type {
  PageContentComponentProps,
  PageContentComponentSlug,
} from "@repo/components-v1/types/page-content";
import type { TemplateCode } from "./template.definition";

export type TemplateContentContentSchema = PageContentComponentProps;
export type TemplateContentSlug = PageContentComponentSlug;

export type TemplateContentSchema = {
  id: string;
  name: string;
  content: TemplateContentContentSchema;
  slug: TemplateContentSlug;
  code: TemplateCode;
};
