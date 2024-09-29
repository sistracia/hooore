import type {
  Testimonials1Props,
  Testimonials1Slug,
} from "../../types/template-types/testimonials-1";
import type { ComponentRenderer } from "../types";

export type Testimonials1RendererProps = Testimonials1Props & {
  disableAnimation?: boolean;
  disableLink?: boolean;
  logo?: string;
};

export function Testimonials1(props: Testimonials1RendererProps) {
  const _ = props;

  return null;
}

export const TESTIMONIALS_1_META: ComponentRenderer<
  Testimonials1Slug,
  Testimonials1RendererProps
> = {
  slug: "testimonials-1",
  component: Testimonials1,
};
