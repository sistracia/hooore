"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRef } from "react";
import { useVirtualizer } from "@tanstack/react-virtual";

const IconPlaceholder = (_props: { className?: string }) => {
  return <></>;
};
const ICONS = [
  {
    component: IconPlaceholder,
    name: "IconPlaceholder",
    slug: "IconPlaceholder",
  },
];

export function VirtualSelectItems() {
  const parentRef = useRef<React.ElementRef<typeof SelectContent>>(null);

  const rowVirtualizer = useVirtualizer({
    count: ICONS.length,
    getScrollElement: () => {
      return parentRef.current;
    },
    estimateSize: () => {
      return 35;
    },
    overscan: 5,
  });

  return (
    <div
      ref={parentRef}
      className="List"
      style={{
        height: `200px`,
        width: `400px`,
        overflow: "auto",
      }}
    >
      <SelectGroup
        style={{
          height: `${rowVirtualizer.getTotalSize()}px`,
          width: "100%",
          position: "relative",
        }}
      >
        {rowVirtualizer.getVirtualItems().map((virtualRow, virtualRowIndex) => {
          const icon = ICONS[virtualRowIndex]!;
          const { component: Component, name, slug } = icon;

          return (
            <div
              key={virtualRow.index}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: `${virtualRow.size}px`,
                transform: `translateY(${virtualRow.start}px)`,
              }}
            >
              <SelectItem value={slug}>
                <span className="dd-flex dd-gap-1">
                  <Component className="dd-mr-2 dd-h-4 dd-w-4" />
                  {name}
                </span>
              </SelectItem>
            </div>
          );
        })}
      </SelectGroup>
    </div>
  );
}

function SelectItems() {
  return (
    <SelectGroup>
      {ICONS.map(({ component: Component, name, slug }) => {
        return (
          <SelectItem key={slug} value={slug}>
            <span className="dd-flex dd-gap-1">
              <Component className="dd-mr-2 dd-h-4 dd-w-4" />
              {name}
            </span>
          </SelectItem>
        );
      })}
    </SelectGroup>
  );
}

export type IconPickerProps = {
  value?: string;
  onChange?: (value: string) => void;
};

export function IconPicker({ onChange, value }: IconPickerProps) {
  return (
    <Select onValueChange={onChange} defaultValue={value}>
      <SelectTrigger className="dd-w-full">
        <SelectValue placeholder="Select a icon" />
      </SelectTrigger>
      <SelectContent>
        <SelectItems />
      </SelectContent>
    </Select>
  );
}
