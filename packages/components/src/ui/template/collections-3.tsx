import type {
  Collections3Props,
  Collections3Slug,
} from "../../types/template-types/collections-3";
import type { ComponentRenderer } from "../types";

export type Collections3RendererProps = Collections3Props & {
  disableAnimation?: boolean;
  disableLink?: boolean;
  logo?: string;
};

export function Collections3(props: Collections3RendererProps) {
  const _ = props;

  return null;
}

export const COLLECTIONS_3_META: ComponentRenderer<
  Collections3Slug,
  Collections3RendererProps
> = {
  slug: "collections-3",
  component: Collections3,
};
