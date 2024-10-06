import type { Blog2Props } from "../../types/template-types/blog-2";

export type Blog2RendererProps = Blog2Props & {
  disableAnimation?: boolean;
  disableLink?: boolean;
  logo?: string;
};

export function Blog2(props: Blog2RendererProps) {
  const _ = props;

  return null;
}
