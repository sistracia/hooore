import type {
  Newsletter2Props,
  Newsletter2Slug,
} from "../../types/template-types/newsletter-2";
import type { ComponentRenderer } from "../types";

export type Newsletter2RendererProps = Newsletter2Props & {
  disableAnimation?: boolean;
  disableLink?: boolean;
  logo?: string;
};

export function Newsletter2(props: Newsletter2RendererProps) {
  const _ = props;

  return null;
}

export const NEWSLETTER_2_META: ComponentRenderer<
  Newsletter2Slug,
  Newsletter2RendererProps
> = {
  slug: "newsletter-2",
  component: Newsletter2,
};
