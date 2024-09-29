import type { Faq2Props, Faq2Slug } from "../../types/template-types/faq-2";
import type { ComponentRenderer } from "../types";

export type Faq2RendererProps = Faq2Props & {
  disableAnimation?: boolean;
  disableLink?: boolean;
  logo?: string;
};

export function Faq2(props: Faq2RendererProps) {
  const _ = props;

  return null;
}

export const FAQ_2_META: ComponentRenderer<Faq2Slug, Faq2RendererProps> = {
  slug: "faq-2",
  component: Faq2,
};
