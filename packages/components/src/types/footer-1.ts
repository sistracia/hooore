export type Footer1Slug = "footer-1";

export type FooterLinkProps = {
  label?: string;
  link?: string;
};

export type Footer1Props = {
  link?: (FooterLinkProps | undefined)[];
  additional_link?: (FooterLinkProps | undefined)[];
};
