export type FAQ1Slug = "faq-1";

export type FAQItemProps = {
  question?: string;
  answer?: string;
};

export type FAQ1Props = {
  tag?: string;
  headline?: string;
  caption?: string;
  faq?: (FAQItemProps | undefined)[];
};
