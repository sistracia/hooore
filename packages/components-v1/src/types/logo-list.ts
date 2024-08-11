export type LogoListSlug = "logo-list";

export type LogoProps = {
  image?: string;
};

export type LogoListProps = {
  images?: (LogoProps | undefined)[];
};
