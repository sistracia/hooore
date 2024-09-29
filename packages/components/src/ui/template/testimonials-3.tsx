import type {
  Testimonials3Props,
  Testimonials3Slug,
} from "../../types/template-types/testimonials-3";
import type { ComponentRenderer } from "../types";

export type Testimonials3RendererProps = Testimonials3Props & {
  disableAnimation?: boolean;
  disableLink?: boolean;
  logo?: string;
};

export function Testimonials3(props: Testimonials3RendererProps) {
  const _ = props;

  return null;
}

export const TESTIMONIALS_3_META: ComponentRenderer<
  Testimonials3Slug,
  Testimonials3RendererProps
> = {
  slug: "testimonials-3",
  component: Testimonials3,
};
