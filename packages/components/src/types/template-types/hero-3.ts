export type Hero3Slug = "hero-3";

export type Hero3ButtonProps = {
  label?: string;
  link?: string;
};

export type Hero3Props = {
  image?: string;
  sub_headline?: string;
  headline?: string;
  left_button?: Hero3ButtonProps | undefined;
  right_button?: Hero3ButtonProps | undefined;
};
