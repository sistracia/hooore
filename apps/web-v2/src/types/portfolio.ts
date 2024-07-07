import { Contents } from "./content";

export type Portfolio = {
  title: string;
  description: string;
  thumbnail_url: string;
  thumbnail_alt: string;
  slug: string;
  tags: string[];
  contents: Contents;
};
