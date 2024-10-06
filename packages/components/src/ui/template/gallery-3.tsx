import type { Gallery3Props } from "../../types/template-types/gallery-3";

export type Gallery3RendererProps = Gallery3Props & {
  disableAnimation?: boolean;
  disableLink?: boolean;
  logo?: string;
};

export function Gallery3(props: Gallery3RendererProps) {
  const _ = props;

  return null;
}
