export type BlogContent = Record<string, unknown>;

export type Blog = {
  title: string;
  description: string;
  thumbnail_url: string;
  thumbnail_alt: string;
  slug: string;
  tags: string[];
  published_date: string;
  viewers: number;
  content: BlogContent;
};
