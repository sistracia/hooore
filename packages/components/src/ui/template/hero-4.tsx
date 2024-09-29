import type { Hero4Props, Hero4Slug } from "../../types/template-types/hero-4";
import type { ComponentRenderer } from "../types";

export type Hero4RendererProps = Hero4Props & {
  disableAnimation?: boolean;
  disableLink?: boolean;
  logo?: string;
};

export function Hero4(props: Hero4RendererProps) {
  const _ = props;

  return null;
}

export const HERO_4_META: ComponentRenderer<Hero4Slug, Hero4RendererProps> = {
  slug: "hero-4",
  component: Hero4,
};
