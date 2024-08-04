export type ParagraphListType = "ordered" | "unordered";

export type ParagraphList = {
  type: ParagraphListType;
  items: string[];
};

export type ParagraphContent = {
  paragraph: string;
  list?: ParagraphList;
};

export type Paragraph = {
  title: string;
  contents: ParagraphContent[];
};
