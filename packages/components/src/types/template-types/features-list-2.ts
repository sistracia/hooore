import type { FeatureNameProps, ImageProps } from "./features-list-1";

export type FeaturesList2Slug = "features-list-2";

export type FeaturesList2Props = {
  background?: string;
  features?: (FeatureNameProps | undefined)[];
  images?: (ImageProps | undefined)[];
};
