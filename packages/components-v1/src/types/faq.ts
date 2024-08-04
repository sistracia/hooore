export type FAQItemProps = {
  question?: string;
  answer?: string;
};

export type FAQSlug = "faq";

export type FAQProps = {
  tag?: string;
  headline?: string;
  caption?: string;
  faq?: FAQItemProps[];
};
