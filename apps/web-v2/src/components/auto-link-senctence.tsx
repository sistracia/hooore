import { TextLink } from "./text-link";
import { Fragment } from "react";

export type AutoLinkSentenceProps = {
  children?: string;
};

export function AutoLinkSentence({ children }: AutoLinkSentenceProps) {
  return children?.split(" ").map((word, wordIndex) => {
    return (
      <Fragment key={wordIndex}>
        <TextLink autoConvert>{word}</TextLink>{" "}
      </Fragment>
    );
  });
}
