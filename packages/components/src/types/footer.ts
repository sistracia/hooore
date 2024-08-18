export type FooterLinkProps = {
  label?: string;
  link?: string;
};

export type FooterSlug = "footer";

export type FooterProps = {
  link?: (FooterLinkProps | undefined)[];
  additional_link?: (FooterLinkProps | undefined)[];
};
