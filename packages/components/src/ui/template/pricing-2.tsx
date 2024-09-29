import type {
  Pricing2Props,
  Pricing2Slug,
} from "../../types/template-types/pricing-2";
import type { ComponentRenderer } from "../types";

export type Pricing2RendererProps = Pricing2Props & {
  disableAnimation?: boolean;
  disableLink?: boolean;
  logo?: string;
};
export function Pricing2(props: Pricing2RendererProps) {
  const _ = props;

  return null;
}

export const PRICING_2_META: ComponentRenderer<
  Pricing2Slug,
  Pricing2RendererProps
> = {
  slug: "pricing-2",
  component: Pricing2,
};
