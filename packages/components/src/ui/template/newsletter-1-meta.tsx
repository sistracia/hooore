import type { Newsletter1Slug } from "../../types/template-types/newsletter-1";
import type { ComponentRenderer } from "../types";
import { type Newsletter1RendererProps, Newsletter1 } from "./newsletter-1";

export const NEWSLETTER_1_META: ComponentRenderer<
  Newsletter1Slug,
  Newsletter1RendererProps
> = {
  slug: "newsletter-1",
  component: Newsletter1,
};
