import type {
  Gallery1Props,
  Gallery1Slug,
} from "../../types/template-types/gallery-1";
import type { ComponentRenderer } from "../types";

export type Gallery1RendererProps = Gallery1Props & {
  disableAnimation?: boolean;
  disableLink?: boolean;
  logo?: string;
};

export function Gallery1(props: Gallery1RendererProps) {
  const _ = props;

  return null;
}

export const GALLERY_1_META: ComponentRenderer<
  Gallery1Slug,
  Gallery1RendererProps
> = {
  slug: "gallery-1",
  component: Gallery1,
};
