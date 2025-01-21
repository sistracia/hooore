"use client";

import { forwardRef, useState } from "react";
import { Popover, PopoverContent } from "./ui/popover";
import { PopoverAnchor } from "@radix-ui/react-popover";
import { type InputWithIconProps, InputWithIcon } from "./ui/input";
import { ZoomInIcon } from "@radix-ui/react-icons";
import { usePageLinks } from "@/query/page-link";

export type AutocompleteLinkProps = Omit<InputWithIconProps, "onChange"> & {
  projectId: string;
  onChange: (value: string) => void;
};

/**
 * Ref: https://github.com/radix-ui/primitives/discussions/2705
 */
export const AutocompleteLink = forwardRef<
  HTMLInputElement,
  AutocompleteLinkProps
>((props, ref) => {
  const { startIcon, onFocus, onBlur, onChange, projectId, ...restProps } =
    props;
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const { data } = usePageLinks(projectId, { q: search });

  const resetSearch = () => {
    setSearch("");
  };

  return (
    <Popover open={isOpen && data !== undefined && data.length !== 0}>
      <PopoverAnchor asChild>
        <InputWithIcon
          {...restProps}
          ref={ref}
          startIcon={startIcon || <ZoomInIcon className="dd-h-4 dd-w-4" />}
          onChange={(event) => {
            const value = event.currentTarget.value;
            onChange?.(value);
            setSearch(value);
          }}
          onFocus={(event) => {
            setIsOpen(true);
            onFocus?.(event);
          }}
          onBlur={(event) => {
            setIsOpen(false);
            onBlur?.(event);
            resetSearch();
          }}
        />
      </PopoverAnchor>
      <PopoverContent
        onOpenAutoFocus={(event) => {
          event.preventDefault();
        }}
      >
        {data?.map((pageLink) => {
          return (
            <div
              key={pageLink.id}
              role="button"
              tabIndex={0}
              className="dd-mb-2 dd-cursor-pointer dd-rounded-sm dd-border-b-2 dd-p-2 dd-pt-2 last:dd-mb-0 last:dd-border-b-0 hover:dd-bg-muted"
              onKeyDown={() => {
                onChange?.(pageLink.slug);
              }}
              onClick={() => {
                onChange?.(pageLink.slug);
              }}
            >
              <span className="dd-block dd-text-sm dd-font-semibold">
                {pageLink.name}
              </span>
              <span className="dd-block dd-text-sm dd-text-muted-foreground">
                {pageLink.slug}
              </span>
            </div>
          );
        })}
      </PopoverContent>
    </Popover>
  );
});

AutocompleteLink.displayName = "AutocompleteLink";
