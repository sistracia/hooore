import type {
  FeaturesList3Props,
  FeaturesList3Slug,
} from "../../types/template-types/features-list-3";
import type { ComponentRenderer } from "../types";

export type FeaturesList3RendererProps = FeaturesList3Props & {
  disableAnimation?: boolean;
  disableLink?: boolean;
  logo?: string;
};

export function FeaturesList3(props: FeaturesList3RendererProps) {
  const _ = props;

  return null;
}

export const FEATURE_LIST_3_META: ComponentRenderer<
  FeaturesList3Slug,
  FeaturesList3RendererProps
> = {
  slug: "features-list-3",
  component: FeaturesList3,
};
