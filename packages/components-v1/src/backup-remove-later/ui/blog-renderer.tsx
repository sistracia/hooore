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
} from "../types/content";
import { Content4 } from "./content4";
import { Divider } from "../../ui/divider";
import { cn } from "@repo/utils";
import { Fragment } from "react";

export function IdentityContentItemListComponent(
  props: IdentityContentItemList,
) {
  const Comp = props.ordered ? "ul" : "ol";

  return (
    <Comp
      className={cn(
        "pc-pl-4",
        props.ordered ? "pc-list-decimal" : "pc-list-disc",
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
    <div className="pc-grid pc-grid-cols-2 pc-gap-6 sm:pc-grid-cols-4 sm:pc-gap-12">
      {props.items.map((item, itemIndex) => {
        return (
          <div key={itemIndex}>
            <span className="pc-mb-2 pc-block pc-text-h4-sm pc-font-semibold">
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
        "pc-h-full pc-rounded-lg pc-object-cover",
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
        "pc-whitespace-pre-line pc-text-balance pc-text-p sm:pc-text-p-sm",
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
        Heading === "h2" && "pc-text-h2 sm:pc-text-h2-sm",
        Heading === "h3" && "pc-text-h3 sm:pc-text-h3-sm",
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
        <article className="pc-flex pc-flex-col pc-gap-6 sm:pc-gap-12">
          <div className="pc-flex pc-flex-col pc-gap-6 sm:pc-flex-row sm:pc-gap-12">
            <TitleContentComponent
              type="title"
              className="pc-flex-1"
              titleVariant={Heading}
              text={item.title}
            />
            <ParagraphContentComponent
              text={item.description}
              type="paragraph"
              className="pc-flex-[2]"
            />
          </div>
          {item.image && (
            <ImageContentComponent
              {...item.image}
              className="pc-max-h-[500px] pc-flex-1"
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
    <div className="pc-ml-6 pc-border-l-4 pc-border-crema-cream-800 pc-pl-6 pc-text-crema-cream-800 sm:pc-ml-10 sm:pc-pl-10">
      <span className="pc-text-h4">{title}</span>
      <p className="pc-text-balance pc-text-note">{description}</p>
    </div>
  );
}

export function SubtitleContentComponent({ text }: SubtitleContent) {
  return <span className="pc-text-h3 sm:pc-text-h3-sm">{text}</span>;
}

export function ContenItemComponent(props: ContenItem) {
  if (props.type === "identity") {
    return <IdentityContentComponent {...props} />;
  }

  if (props.type === "divider") {
    return <Divider subtle={props.subtle} />;
  }

  if (props.type === "image") {
    return <ImageContentComponent {...props} className="pc-max-h-[720px]" />;
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
        "pc-flex pc-flex-col pc-gap-6 pc-py-10 pc-pl-4 pc-pr-4 sm:pc-gap-8 sm:pc-py-10 sm:pc-pl-10 sm:pc-pr-10",
        align === "left" && "sm:pc-pr-[30vw]",
        align === "right" && "sm:pc-pl-[30vw]",
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
      className="pc-px-4 pc-py-10 sm:pc-px-20 sm:pc-py-20"
      title={title}
      align="left"
      content={items.map((item, itemIndex) => {
        return <ContenItemComponent key={itemIndex} {...item} />;
      })}
    />
  );
}

export type BlogRendererProps = {
  contents: Contents;
};

export function BlogRenderer({ contents }: BlogRendererProps) {
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
