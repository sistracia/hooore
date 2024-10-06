import type { Content5Props } from "../../types/template-types/content-5";

export type Content5RendererProps = Content5Props & {
  disableAnimation?: boolean;
  disableLink?: boolean;
  logo?: string;
};

export function Content5(props: Content5RendererProps) {
  const _ = props;

  return null;
}
