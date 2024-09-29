import type { Faq4Props, Faq4Slug } from "../../types/template-types/faq-4";
import type { ComponentRenderer } from "../types";

export type Faq4RendererProps = Faq4Props & {
  disableAnimation?: boolean;
  disableLink?: boolean;
  logo?: string;
};

export function Faq4(props: Faq4RendererProps) {
  const _ = props;

  return null;
}

export const FAQ_4_META: ComponentRenderer<Faq4Slug, Faq4RendererProps> = {
  slug: "faq-4",
  component: Faq4,
};
