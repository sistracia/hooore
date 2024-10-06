import type { Footer2Props } from "../../types/template-types/footer-2";

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
