export type FAQItemProps = {
  question?: string;
  answer?: string;
};

export type FAQProps = {
  tag?: string;
  headline?: string;
  caption?: string;
  faq?: FAQItemProps[];
};
