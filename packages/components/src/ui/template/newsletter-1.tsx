import type {
  Newsletter1Props,
  Newsletter1Slug,
} from "../../types/template-types/newsletter-1";
import type { ComponentRenderer } from "../types";

export type Newsletter1RendererProps = Newsletter1Props & {
  disableAnimation?: boolean;
  disableLink?: boolean;
  logo?: string;
};

export function Newsletter1(props: Newsletter1RendererProps) {
  const _ = props;

  return null;
}

export const NEWSLETTER_1_META: ComponentRenderer<
  Newsletter1Slug,
  Newsletter1RendererProps
> = {
  slug: "newsletter-1",
  component: Newsletter1,
};
