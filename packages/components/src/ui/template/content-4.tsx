import type {
  Content4Props,
  Content4Slug,
} from "../../types/template-types/content-4";
import type { ComponentRenderer } from "../types";

export type Content4RendererProps = Content4Props & {
  disableAnimation?: boolean;
  disableLink?: boolean;
  logo?: string;
};

export function Content4(props: Content4RendererProps) {
  const _ = props;

  return null;
}

export const CONTENT_4_META: ComponentRenderer<
  Content4Slug,
  Content4RendererProps
> = {
  slug: "content-4",
  component: Content4,
};
