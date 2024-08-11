export type Content2ItemProps = {
  headline?: string;
  description?: string;
};

export type Content2Slug = "content-2";

export type Content2Props = {
  headline?: string;
  content?: (Content2ItemProps | undefined)[];
};
