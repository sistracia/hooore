import type {
  Footer2Props,
  Footer2Slug,
} from "../../types/template-types/footer-2";
import type { ComponentRenderer } from "../types";

export type Footer2RendererProps = Footer2Props & {
  disableAnimation?: boolean;
  disableLink?: boolean;
  logo?: string;
  copyright?: string;
};

export function Footer2(props: Footer2RendererProps) {
  const _ = props;

  return null;
}

export const FOOTER_2_META: ComponentRenderer<
  Footer2Slug,
  Footer2RendererProps
> = {
  slug: "footer-2",
  component: Footer2,
};
