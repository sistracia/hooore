import {
  type PageContentComponentProps,
  type PageContentComponentSlug,
} from "@repo/components-v1/types/page-content";

export type TemplateContentContentSchema = PageContentComponentProps;
export type TemplateContentSlug = PageContentComponentSlug;

export type TemplateCode = "company-profile-1";

export type TemplateSchema = {
  id: string;
  code: TemplateCode;
  name: string;
  thumbnail_url: string;
};
