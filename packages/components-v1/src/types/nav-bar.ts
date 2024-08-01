export type NavbarSubItemProps = {
  label?: string;
  link?: string;
};

export type NavbarItemProps = {
  label?: string;
  link?: string;
  sub_link?: NavbarSubItemProps[];
};

export type NavbarProps = {
  link?: NavbarItemProps[];
};
