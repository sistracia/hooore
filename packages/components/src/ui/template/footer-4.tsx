import type {
  Footer4Props,
  Footer4Slug,
} from "../../types/template-types/footer-4";
import type { ComponentRenderer } from "../types";

export type Footer4RendererProps = Footer4Props & {
  disableAnimation?: boolean;
  disableLink?: boolean;
  logo?: string;
  copyright?: string;
};

export function Footer4(props: Footer4RendererProps) {
  const _ = props;

  return null;
}

export const FOOTER_4_META: ComponentRenderer<
  Footer4Slug,
  Footer4RendererProps
> = {
  slug: "footer-4",
  component: Footer4,
};
