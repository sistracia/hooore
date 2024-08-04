export type FooterLinkProps = {
  label?: string;
  link?: string;
};

export type FooterSlug = "footer";

export type FooterProps = {
  link?: FooterLinkProps[];
  additional_link?: FooterLinkProps[];
};
