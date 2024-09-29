import type {
  FeaturesList5Props,
  FeaturesList5Slug,
} from "../../types/template-types/features-list-5";
import type { ComponentRenderer } from "../types";

export type FeaturesList5RendererProps = FeaturesList5Props & {
  disableAnimation?: boolean;
  disableLink?: boolean;
  logo?: string;
};

export function FeaturesList5(props: FeaturesList5RendererProps) {
  const _ = props;

  return null;
}

export const FEATURE_LIST_5_META: ComponentRenderer<
  FeaturesList5Slug,
  FeaturesList5RendererProps
> = {
  slug: "features-list-5",
  component: FeaturesList5,
};
