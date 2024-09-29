import type {
  Pricing3Props,
  Pricing3Slug,
} from "../../types/template-types/pricing-3";
import type { ComponentRenderer } from "../types";

export type Pricing3RendererProps = Pricing3Props & {
  disableAnimation?: boolean;
  disableLink?: boolean;
  logo?: string;
};
export function Pricing3(props: Pricing3RendererProps) {
  const _ = props;

  return null;
}

export const PRICING_3_META: ComponentRenderer<
  Pricing3Slug,
  Pricing3RendererProps
> = {
  slug: "pricing-3",
  component: Pricing3,
};
