export type FooterImage = {
  src: string;
  alt: string;
};

export type ItemItem = {
  title: string;
  description: string;
};

export type ContentItem = {
  title: string;
  items: ItemItem[];
};

export type Content = {
  backgoundColor: string;
  items: ContentItem[];
};

export type Service = {
  background_color: string;
  thumbnail_url: string;
  thumbnail_alt: string;
  tags: string[];
  items: string[];
  title: string;
  description: string;
  slug: string;
  background_image: string;
  footer_images: FooterImage[];
  contents: Content;
};
