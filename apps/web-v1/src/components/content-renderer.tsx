import type {
  Contents,
  ContenItem,
  ParagraphContent,
  TitleContent,
  ContentWrapperOneColumn,
  ContentWrapperTwoColumn,
  IdentityContent,
  IdentityContentItemList,
  IdentityContentItemText,
  ImageContent,
  ListContent,
  NoteContent,
  SubtitleContent,
} from "@/types/content";
import { Content4 } from "./content4";
import { Divider } from "./divider";
import { cn } from "@repo/utils";
import { Fragment } from "react";

export function IdentityContentItemListComponent(
  props: IdentityContentItemList,
) {
  const Comp = props.ordered ? "ul" : "ol";

  return (
    <Comp
      className={cn(
        "ss-pl-4",
        props.ordered ? "ss-list-decimal" : "ss-list-disc",
      )}
    >
      {props.items.map((item, itemIndex) => {
        return <li key={itemIndex}>{item}</li>;
      })}
    </Comp>
  );
}

export function IdentityContentItemTextComponent(
  props: IdentityContentItemText,
) {
  return <span>{props.text}</span>;
}

export function IdentityContentComponent(props: IdentityContent) {
  return (
    <div className="ss-grid ss-grid-cols-2 ss-gap-6 sm:ss-grid-cols-4 sm:ss-gap-12">
      {props.items.map((item, itemIndex) => {
        return (
          <div key={itemIndex}>
            <span className="ss-mb-2 ss-block ss-text-xl ss-font-semibold">
              {item.title}
            </span>
            <div>
              {item.content.type === "identity_text" ? (
                <IdentityContentItemTextComponent {...item.content} />
              ) : (
                <IdentityContentItemListComponent {...item.content} />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export function ImageContentComponent({
  full,
  src,
  alt,
  className,
}: ImageContent & { className?: string }) {
  return (
    <img
      src={src}
      alt={alt}
      className={cn(
        "ss-h-full ss-rounded-lg ss-object-cover",
        full && "",
        className,
      )}
    />
  );
}

export function ParagraphContentComponent({
  text,
  className,
}: ParagraphContent & { className?: string }) {
  return (
    <p
      className={cn(
        "ss-whitespace-pre-line ss-text-balance ss-text-p sm:ss-text-p-sm",
        className,
      )}
    >
      {text}
    </p>
  );
}

export function TitleContentComponent({
  text,
  titleVariant: Heading,
  className,
}: TitleContent & { className?: string }) {
  return (
    <Heading
      className={cn(
        Heading === "h2" && "ss-text-h2 sm:ss-text-h2-sm",
        Heading === "h3" && "ss-text-h3 sm:ss-text-h3-sm",
        className,
      )}
    >
      {text}
    </Heading>
  );
}

export function ListContentComponent({ items }: ListContent) {
  return items.map((item, itemIndex) => {
    const Heading = item.titleVariant;
    return (
      <Fragment key={itemIndex}>
        <article className="ss-flex ss-flex-col ss-gap-6 sm:ss-gap-12">
          <div className="ss-flex ss-flex-col ss-gap-6 sm:ss-flex-row sm:ss-gap-12">
            <TitleContentComponent
              type="title"
              className="ss-flex-1"
              titleVariant={Heading}
              text={item.title}
            />
            <ParagraphContentComponent
              text={item.description}
              type="paragraph"
              className="ss-flex-[2]"
            />
          </div>
          {item.image && (
            <ImageContentComponent
              {...item.image}
              className="ss-max-h-[500px] ss-flex-1"
            />
          )}
        </article>
        {itemIndex !== items.length - 1 && <Divider subtle />}
      </Fragment>
    );
  });
}

export function NoteContentComponent({ title, description }: NoteContent) {
  return (
    <div className="ss-ml-6 ss-border-l-4 ss-border-crema-cream-800 ss-pl-6 ss-text-crema-cream-800 sm:ss-ml-10 sm:ss-pl-10">
      <span className="ss-text-xl">{title}</span>
      <p className="ss-text-balance ss-text-note">{description}</p>
    </div>
  );
}

export function SubtitleContentComponent({ text }: SubtitleContent) {
  return <span className="ss-text-2xl sm:ss-text-4xl">{text}</span>;
}

export function ContenItemComponent(props: ContenItem) {
  if (props.type === "identity") {
    return <IdentityContentComponent {...props} />;
  }

  if (props.type === "divider") {
    return <Divider subtle={props.subtle} />;
  }

  if (props.type === "image") {
    return <ImageContentComponent {...props} className="ss-max-h-[720px]" />;
  }

  if (props.type === "list") {
    return <ListContentComponent {...props} />;
  }

  if (props.type === "note") {
    return <NoteContentComponent {...props} />;
  }

  if (props.type === "paragraph") {
    return <ParagraphContentComponent {...props} />;
  }

  if (props.type === "subtitle") {
    return <SubtitleContentComponent {...props} />;
  }

  if (props.type === "title") {
    return <TitleContentComponent {...props} />;
  }

  return null;
}

// Handle padding
export function ContentWrapperOneColumnComponent({
  align,
  items,
}: ContentWrapperOneColumn) {
  return (
    <section
      className={cn(
        "ss-flex ss-flex-col ss-gap-6 ss-py-10 ss-pl-4 ss-pr-4 sm:ss-gap-8 sm:ss-py-10 sm:ss-pl-10 sm:ss-pr-10",
        align === "left" && "sm:ss-pr-[30vw]",
        align === "right" && "sm:ss-pl-[30vw]",
      )}
    >
      {items.map((item, itemIndex) => {
        return <ContenItemComponent key={itemIndex} {...item} />;
      })}
    </section>
  );
}

export function ContentWrapperTwoColumnComponent({
  title,
  items,
}: ContentWrapperTwoColumn) {
  return (
    <Content4
      className="ss-px-4 ss-py-10 sm:ss-px-20 sm:ss-py-20"
      title={title}
      align="left"
      content={items.map((item, itemIndex) => {
        return <ContenItemComponent key={itemIndex} {...item} />;
      })}
    />
  );
}

export type ContentRendererProps = {
  contents: Contents;
};

export function ContentRenderer({ contents }: ContentRendererProps) {
  return contents.map((content, contentIndex) => {
    if (content.type === "wrapper_one_column") {
      return (
        <ContentWrapperOneColumnComponent key={contentIndex} {...content} />
      );
    }

    if (content.type === "divider") {
      return <Divider key={contentIndex} subtle={content.subtle} />;
    }

    if (content.type === "wrapper_two_column") {
      return (
        <ContentWrapperTwoColumnComponent key={contentIndex} {...content} />
      );
    }
  });
}
