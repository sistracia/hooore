import type {
  Content5Props,
  Content5Slug,
} from "../../types/template-types/content-5";
import type { ComponentRenderer } from "../types";

export type Content5RendererProps = Content5Props & {
  disableAnimation?: boolean;
  disableLink?: boolean;
  logo?: string;
};

export function Content5(props: Content5RendererProps) {
  const _ = props;

  return null;
}

export const CONTENT_5_META: ComponentRenderer<
  Content5Slug,
  Content5RendererProps
> = {
  slug: "content-5",
  component: Content5,
};
