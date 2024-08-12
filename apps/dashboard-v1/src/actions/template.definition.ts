import type { TemplateCode as TemplateCodeV1 } from "@repo/components-v1/types/page-content";

export type TemplateCode = TemplateCodeV1;

export type TemplateSchema = {
  id: string;
  code: TemplateCode;
  name: string;
  thumbnail_url: string;
};
