import type { Blog1Props } from "../../types/template-types/blog-1";

export type Blog1RendererProps = Blog1Props & {
  disableAnimation?: boolean;
  disableLink?: boolean;
  logo?: string;
};

export function Blog1(props: Blog1RendererProps) {
  const _ = props;

  return null;
}
