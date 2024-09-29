import type { Blog1Props, Blog1Slug } from "../../types/template-types/blog-1";
import type { ComponentRenderer } from "../types";

export type Blog1RendererProps = Blog1Props & {
  disableAnimation?: boolean;
  disableLink?: boolean;
  logo?: string;
};

export function Blog1(props: Blog1RendererProps) {
  const _ = props;

  return null;
}

export const BLOG_1_META: ComponentRenderer<Blog1Slug, Blog1RendererProps> = {
  slug: "blog-1",
  component: Blog1,
};
