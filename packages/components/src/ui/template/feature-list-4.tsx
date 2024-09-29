import type {
  FeaturesList4Props,
  FeaturesList4Slug,
} from "../../types/template-types/features-list-4";
import type { ComponentRenderer } from "../types";

export type FeaturesList4RendererProps = FeaturesList4Props & {
  disableAnimation?: boolean;
  disableLink?: boolean;
  logo?: string;
};

export function FeaturesList4(props: FeaturesList4RendererProps) {
  const _ = props;

  return null;
}

export const FEATURE_LIST_4_META: ComponentRenderer<
  FeaturesList4Slug,
  FeaturesList4RendererProps
> = {
  slug: "features-list-4",
  component: FeaturesList4,
};
