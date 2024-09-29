import type {
  FeaturesList6Props,
  FeaturesList6Slug,
} from "../../types/template-types/features-list-6";
import type { ComponentRenderer } from "../types";

export type FeaturesList6RendererProps = FeaturesList6Props & {
  disableAnimation?: boolean;
  disableLink?: boolean;
  logo?: string;
};

export function FeaturesList6(props: FeaturesList6RendererProps) {
  const _ = props;

  return null;
}

export const FEATURE_LIST_6_META: ComponentRenderer<
  FeaturesList6Slug,
  FeaturesList6RendererProps
> = {
  slug: "features-list-6",
  component: FeaturesList6,
};
