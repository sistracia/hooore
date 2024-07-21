import { cn } from "@repo/utils";
import { AutoLinkSentence } from "./auto-link-senctence";

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
        "pc-pl-[revert]",
        isOrderedList && "pc-list-decimal",
        isUnorderedList && "pc-list-disc",
        className,
      )}
    >
      {items?.map((item, itemIndex) => {
        return (
          <li key={itemIndex} className="pc-text-p sm:pc-text-p-sm">
            <AutoLinkSentence>{item}</AutoLinkSentence>
          </li>
        );
      })}
    </ListComponent>
  );
}
