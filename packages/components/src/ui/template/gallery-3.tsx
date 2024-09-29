import type {
  Gallery3Props,
  Gallery3Slug,
} from "../../types/template-types/gallery-3";
import type { ComponentRenderer } from "../types";

export type Gallery3RendererProps = Gallery3Props & {
  disableAnimation?: boolean;
  disableLink?: boolean;
  logo?: string;
};

export function Gallery3(props: Gallery3RendererProps) {
  const _ = props;

  return null;
}

export const GALLERY_3_META: ComponentRenderer<
  Gallery3Slug,
  Gallery3RendererProps
> = {
  slug: "gallery-3",
  component: Gallery3,
};
