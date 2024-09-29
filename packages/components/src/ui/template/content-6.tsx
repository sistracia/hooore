import type {
  Content6Props,
  Content6Slug,
} from "../../types/template-types/content-6";
import type { ComponentRenderer } from "../types";

export type Content6RendererProps = Content6Props & {
  disableAnimation?: boolean;
  disableLink?: boolean;
  logo?: string;
};

export function Content6(props: Content6RendererProps) {
  const _ = props;

  return null;
}

export const CONTENT_6_META: ComponentRenderer<
  Content6Slug,
  Content6RendererProps
> = {
  slug: "content-6",
  component: Content6,
};
