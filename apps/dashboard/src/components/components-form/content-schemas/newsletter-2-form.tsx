import type {
  Newsletter2Props,
  Newsletter2Slug,
} from "@repo/components/types/template-types/newsletter-2";
import type { FormFields } from "../types";

export const NEWSLETTER_2_FORM_SCHEMA: FormFields<
  Newsletter2Slug,
  Newsletter2Props
> = {
  slug: "newsletter-2",
  fields: [],
};
