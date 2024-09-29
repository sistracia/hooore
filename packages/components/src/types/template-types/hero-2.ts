export type Hero2Slug = "hero-2";

export type Hero2ButtonProps = {
  label?: string;
  link?: string;
};

export type Hero2Props = {
  image?: string;
  sub_headline?: string;
  headline?: string;
  description?: string;
  left_button?: Hero2ButtonProps | undefined;
  right_button?: Hero2ButtonProps | undefined;
};
