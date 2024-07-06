export type PortfolioContent = Record<string, unknown>;

export type Portfolio = {
  title: string;
  description: string;
  thumbnail_url: string;
  thumbnail_alt: string;
  slug: string;
  tags: string[];
  content: PortfolioContent;
};
