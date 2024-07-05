import { type Paragraph as ParagraphType } from "@/types/paragraph";
import { List } from "./list";

export function Paragraph({ title, contents }: Partial<ParagraphType>) {
  return (
    <>
      {title && <h2>{title}</h2>}
      {contents?.map((content, contentIndex) => {
        return (
          <div key={contentIndex}>
            <p className="ss-whitespace-pre-line">{content.paragraph}</p>
            <List type={content.list?.type} items={content.list?.items} />
          </div>
        );
      })}
    </>
  );
}
