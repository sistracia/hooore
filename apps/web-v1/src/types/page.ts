export type FooterImage = {
  src: string;
  alt: string;
};

export type Service = {
  thumbnailUrl: string;
  thumbnailAlt: string;
  items: string[];
  footerImages: FooterImage[];
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

export type PageData = {
  backgroundColor: string;
  chip: string;
  title: string;
  description: string;
  backgoundImage: string;
  service: Service;
  content: Content;
};
