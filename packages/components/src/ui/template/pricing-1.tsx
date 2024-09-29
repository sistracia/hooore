import type {
  Pricing1Props,
  Pricing1Slug,
} from "../../types/template-types/pricing-1";
import type { ComponentRenderer } from "../types";

export type Pricing1RendererProps = Pricing1Props & {
  disableAnimation?: boolean;
  disableLink?: boolean;
  logo?: string;
};
export function Pricing1(props: Pricing1RendererProps) {
  const _ = props;

  return null;
}

export const PRICING_1_META: ComponentRenderer<
  Pricing1Slug,
  Pricing1RendererProps
> = {
  slug: "pricing-1",
  component: Pricing1,
};
