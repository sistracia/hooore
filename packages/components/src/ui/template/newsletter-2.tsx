import type { Newsletter2Props } from "../../types/template-types/newsletter-2";

export type Newsletter2RendererProps = Newsletter2Props & {
  disableAnimation?: boolean;
  disableLink?: boolean;
  logo?: string;
};

export function Newsletter2(props: Newsletter2RendererProps) {
  const _ = props;

  return null;
}
