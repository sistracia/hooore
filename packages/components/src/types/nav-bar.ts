export type NavbarSubItemProps = {
  label?: string;
  link?: string;
};

export type NavbarItemProps = {
  label?: string;
  link?: string;
  sub_link?: (NavbarSubItemProps | undefined)[];
};

export type NavbarSlug = "navbar";

export type NavbarProps = {
  link?: (NavbarItemProps | undefined)[];
};
