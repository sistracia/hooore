import type { Content4Props } from "../../types/template-types/content-4";

export type Content4RendererProps = Content4Props & {
  disableAnimation?: boolean;
  disableLink?: boolean;
  logo?: string;
};

export function Content4(props: Content4RendererProps) {
  const _ = props;

  return null;
}
