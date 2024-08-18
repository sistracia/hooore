export type FeatureNameProps = {
  name?: string;
};

export type ImageProps = {
  image?: string;
};

export type FeatureItemProps = {
  image?: string;
  headline?: string;
  description?: string;
  features?: (FeatureNameProps | undefined)[];
};

export type VerticalFeatureItemProps = FeatureItemProps & {
  cta_button_label?: string;
  cta_link?: string;
};

export type VerticalFeaturesListSlug = "vertical-features-list";

export type VerticalFeaturesListProps = {
  tag?: string;
  headline?: string;
  description?: string;
  features?: (VerticalFeatureItemProps | undefined)[];
};

export type HorizontalFeaturesListSlug = "horizontal-features-list";

export type HorizontalFeaturesListProps = {
  background?: string;
  features?: (FeatureNameProps | undefined)[];
  images?: (ImageProps | undefined)[];
};
