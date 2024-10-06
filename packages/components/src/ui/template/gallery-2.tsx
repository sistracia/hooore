import type { Gallery2Props } from "../../types/template-types/gallery-2";

export type Gallery2RendererProps = Gallery2Props & {
  disableAnimation?: boolean;
  disableLink?: boolean;
  logo?: string;
};

export function Gallery2(props: Gallery2RendererProps) {
  const _ = props;

  return null;
}
