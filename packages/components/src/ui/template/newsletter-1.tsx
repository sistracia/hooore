import type { Newsletter1Props } from "../../types/template-types/newsletter-1";

export type Newsletter1RendererProps = Newsletter1Props & {
  disableAnimation?: boolean;
  disableLink?: boolean;
  logo?: string;
};

export function Newsletter1(props: Newsletter1RendererProps) {
  const _ = props;

  return null;
}
