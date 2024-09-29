import type { Faq3Props, Faq3Slug } from "../../types/template-types/faq-3";
import type { ComponentRenderer } from "../types";

export type Faq3RendererProps = Faq3Props & {
  disableAnimation?: boolean;
  disableLink?: boolean;
  logo?: string;
};

export function Faq3(props: Faq3RendererProps) {
  const _ = props;

  return null;
}

export const FAQ_3_META: ComponentRenderer<Faq3Slug, Faq3RendererProps> = {
  slug: "faq-3",
  component: Faq3,
};
