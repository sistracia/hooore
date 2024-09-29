import type {
  Testimonials4Props,
  Testimonials4Slug,
} from "../../types/template-types/testimonials-4";
import type { ComponentRenderer } from "../types";

export type Testimonials4RendererProps = Testimonials4Props & {
  disableAnimation?: boolean;
  disableLink?: boolean;
  logo?: string;
};

export function Testimonials4(props: Testimonials4RendererProps) {
  const _ = props;

  return null;
}

export const TESTIMONIALS_4_META: ComponentRenderer<
  Testimonials4Slug,
  Testimonials4RendererProps
> = {
  slug: "testimonials-4",
  component: Testimonials4,
};
