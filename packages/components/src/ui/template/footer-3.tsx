import type {
  Footer3Props,
  Footer3Slug,
} from "../../types/template-types/footer-3";
import type { ComponentRenderer } from "../types";

export type Footer3RendererProps = Footer3Props & {
  disableAnimation?: boolean;
  disableLink?: boolean;
  logo?: string;
  copyright?: string;
};

export function Footer3(props: Footer3RendererProps) {
  const _ = props;

  return null;
}

export const FOOTER_3_META: ComponentRenderer<
  Footer3Slug,
  Footer3RendererProps
> = {
  slug: "footer-3",
  component: Footer3,
};
