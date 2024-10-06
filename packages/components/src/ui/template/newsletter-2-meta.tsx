import type { Newsletter2Slug } from "../../types/template-types/newsletter-2";
import type { ComponentRenderer } from "../types";
import { type Newsletter2RendererProps, Newsletter2 } from "./newsletter-2";

export const NEWSLETTER_2_META: ComponentRenderer<
  Newsletter2Slug,
  Newsletter2RendererProps
> = {
  slug: "newsletter-2",
  component: Newsletter2,
};
