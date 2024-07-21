export type HeadingVariant = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export type AlignVariant = "left" | "center" | "right";

export type ImageContent = {
  type: "image";
  full: boolean;
  src: string;
  alt?: string;
};

export type ListContentItem = {
  title: string;
  titleVariant: HeadingVariant;
  description: string;
  image?: ImageContent;
};

export type ListContent = {
  type: "list";
  items: ListContentItem[];
};

export type TitleContent = {
  type: "title";
  titleVariant: HeadingVariant;
  text: string;
};

export type SubtitleContent = {
  type: "subtitle";
  text: string;
};

export type ParagraphContent = {
  type: "paragraph";
  text: string;
};

export type IdentityContentItemList = {
  type: "identity_list";
  ordered: boolean;
  items: string[];
};

export type IdentityContentItemText = {
  type: "identity_text";
  text: string;
};

export type IdentityContentItem = {
  title: string;
  content: IdentityContentItemList | IdentityContentItemText;
};

export type IdentityContent = {
  type: "identity";
  items: IdentityContentItem[];
};

export type NoteContent = {
  type: "note";
  title: string;
  description: string;
};

export type DividerContent = {
  type: "divider";
  subtle: boolean;
};

export type ContenItem =
  | ImageContent
  | ListContent
  | TitleContent
  | SubtitleContent
  | ParagraphContent
  | IdentityContent
  | NoteContent
  | DividerContent;

export type ContentWrapperOneColumn = {
  type: "wrapper_one_column";
  align: AlignVariant;
  items: ContenItem[];
};

export type ContentWrapperTwoColumn = {
  type: "wrapper_two_column";
  title?: string;
  items: ContenItem[];
};

export type Contents = (
  | ContentWrapperOneColumn
  | ContentWrapperTwoColumn
  | DividerContent
)[];
