import { cn } from "@repo/utils";

export type ListProps = {
  type?: "ordered" | "unordered";
  items?: string[];
  className?: string;
};

export function List({ items, type, className }: ListProps) {
  const isOrderedList = type === "ordered";
  const isUnorderedList = type === "unordered";
  const ListComponent = isOrderedList
    ? "ol"
    : isUnorderedList
      ? "ul"
      : undefined;

  if (!ListComponent) {
    return null;
  }

  return (
    <ListComponent
      className={cn(
        "ss-pl-[revert]",
        isOrderedList && "ss-list-decimal",
        isUnorderedList && "ss-list-disc",
        className,
      )}
    >
      {items?.map((item, itemIndex) => {
        return <li key={itemIndex}>{item}</li>;
      })}
    </ListComponent>
  );
}
