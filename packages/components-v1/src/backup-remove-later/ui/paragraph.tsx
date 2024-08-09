import type { Paragraph as ParagraphType } from "../types/paragraph";
import { List } from "./list";
import { AutoLinkSentence } from "../../ui/auto-link-senctence";

export function Paragraph<T extends React.ElementType = "div">(
  props: { as?: T } & React.ComponentPropsWithoutRef<T> &
    Partial<ParagraphType>,
) {
  const { as: Comp = "div", title, contents } = props;
  return (
    <Comp>
      {title && (
        <h2 className="pc-mb-6 pc-text-balance pc-text-h2 sm:pc-text-h2-sm">
          {title}
        </h2>
      )}
      {contents?.map((content, contentIndex) => {
        return (
          <div key={contentIndex} className="pc-mb-6 last:pc-mb-0">
            <p className="pc-whitespace-pre-line pc-text-balance pc-text-p sm:pc-text-p-sm">
              <AutoLinkSentence>{content.paragraph}</AutoLinkSentence>
            </p>
            <List type={content.list?.type} items={content.list?.items} />
          </div>
        );
      })}
    </Comp>
  );
}
