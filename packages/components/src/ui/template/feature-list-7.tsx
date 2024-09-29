import type {
  FeaturesList7Props,
  FeaturesList7Slug,
} from "../../types/template-types/features-list-7";
import type { ComponentRenderer } from "../types";

export type FeaturesList7RendererProps = FeaturesList7Props & {
  disableAnimation?: boolean;
  disableLink?: boolean;
  logo?: string;
};

export function FeaturesList7(props: FeaturesList7RendererProps) {
  const _ = props;

  return null;
}

export const FEATURE_LIST_7_META: ComponentRenderer<
  FeaturesList7Slug,
  FeaturesList7RendererProps
> = {
  slug: "features-list-7",
  component: FeaturesList7,
};
