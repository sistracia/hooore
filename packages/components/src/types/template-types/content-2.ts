export type Content2Slug = "content-2";

export type Content2ItemProps = {
  headline?: string;
  description?: string;
};

export type Content2Props = {
  headline?: string;
  contents?: (Content2ItemProps | undefined)[];
};
