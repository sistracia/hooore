import type {
  Testimonials2Props,
  Testimonials2Slug,
} from "../../types/template-types/testimonials-2";
import type { ComponentRenderer } from "../types";

export type Testimonials2RendererProps = Testimonials2Props & {
  disableAnimation?: boolean;
  disableLink?: boolean;
  logo?: string;
};

export function Testimonials2(props: Testimonials2RendererProps) {
  const _ = props;

  return null;
}

export const TESTIMONIALS_2_META: ComponentRenderer<
  Testimonials2Slug,
  Testimonials2RendererProps
> = {
  slug: "testimonials-2",
  component: Testimonials2,
};
