import { type Paragraph as ParagraphType } from "@/types/paragraph";
import { List } from "./list";

export function Paragraph<T extends React.ElementType>(
  props: { as?: T } & React.ComponentPropsWithoutRef<T> &
    Partial<ParagraphType>,
) {
  const { as: Comp = "div", title, contents } = props;
  return (
    <Comp>
      {title && <h2 className="ss-mb-6 ss-text-3xl sm:ss-text-5xl">{title}</h2>}
      {contents?.map((content, contentIndex) => {
        return (
          <div key={contentIndex} className="ss-mb-6 last:ss-mb-0">
            <p className="ss-whitespace-pre-line">{content.paragraph}</p>
            <List type={content.list?.type} items={content.list?.items} />
          </div>
        );
      })}
    </Comp>
  );
}
