import type {
  Collections2Props,
  Collections2Slug,
} from "../../types/template-types/collections-2";
import type { ComponentRenderer } from "../types";

export type Collections2RendererProps = Collections2Props & {
  disableAnimation?: boolean;
  disableLink?: boolean;
  logo?: string;
};

export function Collections2(props: Collections2RendererProps) {
  const _ = props;

  return null;
}

export const COLLECTIONS_2_META: ComponentRenderer<
  Collections2Slug,
  Collections2RendererProps
> = {
  slug: "collections-2",
  component: Collections2,
};
