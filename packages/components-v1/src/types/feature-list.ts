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

export type VerticalFeatureListProps = {
  tag?: string;
  headline?: string;
  description?: string;
  features?: VerticalFeatureItemProps[];
};

export type HorizontalFeatureListProps = {
  features?: string[];
  images?: string[];
};
