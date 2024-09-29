import type {
  Gallery2Props,
  Gallery2Slug,
} from "../../types/template-types/gallery-2";
import type { ComponentRenderer } from "../types";

export type Gallery2RendererProps = Gallery2Props & {
  disableAnimation?: boolean;
  disableLink?: boolean;
  logo?: string;
};

export function Gallery2(props: Gallery2RendererProps) {
  const _ = props;

  return null;
}

export const GALLERY_2_META: ComponentRenderer<
  Gallery2Slug,
  Gallery2RendererProps
> = {
  slug: "gallery-2",
  component: Gallery2,
};
