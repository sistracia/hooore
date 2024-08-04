export type FeatureItemProps = {
  image?: string;
  headline?: string;
  description?: string;
  features?: string[];
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
  features?: VerticalFeatureItemProps[];
};

export type HorizontalFeaturesListSlug = "horizontal-features-list";

export type HorizontalFeaturesListProps = {
  background?: string;
  features?: string[];
  images?: string[];
};
