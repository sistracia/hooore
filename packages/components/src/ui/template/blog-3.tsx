import type { Blog3Props, Blog3Slug } from "../../types/template-types/blog-3";
import type { ComponentRenderer } from "../types";

export type Blog3RendererProps = Blog3Props & {
  disableAnimation?: boolean;
  disableLink?: boolean;
  logo?: string;
};

export function Blog3(props: Blog3RendererProps) {
  const _ = props;

  return null;
}

export const BLOG_3_META: ComponentRenderer<Blog3Slug, Blog3RendererProps> = {
  slug: "blog-3",
  component: Blog3,
};
