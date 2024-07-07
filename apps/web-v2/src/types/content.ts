export type ImageContent = {
  type: "image";
  full: boolean;
  src: string;
  alt?: string;
};

export type ListContentItem = {
  title: string;
  description: string;
  image?: ImageContent;
};

export type ListContent = {
  type: "list";
  items: ListContentItem[];
};

export type TitleContent = {
  type: "title";
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
};

export type ContenItem =
  | ImageContent
  | ListContent
  | TitleContent
  | SubtitleContent
  | ParagraphContent
  | IdentityContentItemList
  | IdentityContentItemText
  | IdentityContent
  | NoteContent
  | DividerContent;

export type ContentWrapperOneColumn = {
  type: "one_column";
  items: ContenItem[];
};

export type ContentWrapperTwoColumn = {
  type: "two_column";
  title?: string;
  items: ContenItem[];
};

export type Contents = (ContentWrapperOneColumn | ContentWrapperTwoColumn)[];
