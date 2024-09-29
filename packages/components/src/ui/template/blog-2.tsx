import type { Blog2Props, Blog2Slug } from "../../types/template-types/blog-2";
import type { ComponentRenderer } from "../types";

export type Blog2RendererProps = Blog2Props & {
  disableAnimation?: boolean;
  disableLink?: boolean;
  logo?: string;
};

export function Blog2(props: Blog2RendererProps) {
  const _ = props;

  return null;
}

export const BLOG_2_META: ComponentRenderer<Blog2Slug, Blog2RendererProps> = {
  slug: "blog-2",
  component: Blog2,
};
