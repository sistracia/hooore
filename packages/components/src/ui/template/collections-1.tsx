import type {
  Collections1Props,
  Collections1Slug,
} from "../../types/template-types/collections-1";
import type { ComponentRenderer } from "../types";

export type Collections1RendererProps = Collections1Props & {
  disableAnimation?: boolean;
  disableLink?: boolean;
  logo?: string;
};

export function Collections1(props: Collections1RendererProps) {
  const _ = props;

  return null;
}

export const COLLECTIONS_1_META: ComponentRenderer<
  Collections1Slug,
  Collections1RendererProps
> = {
  slug: "collections-1",
  component: Collections1,
};
