"use client";

import * as React from "react";
import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useIconifyIcons } from "@/query/iconify";
import { kebabCaseToTitleCase } from "@/utils/string";

type IconItemProps = {
  icon: string;
};
function IconItem({ icon }: IconItemProps) {
  return (
    <>
      <Icon icon={icon} className="dd-mr-1 dd-h-4 dd-w-4" />{" "}
      {kebabCaseToTitleCase(icon.split(":")[1])}
    </>
  );
}

export type IconPickerProps = {
  value?: string;
  onChange?: (value: string) => void;
};

export function IconPicker({ onChange, value }: IconPickerProps) {
  const [open, setOpen] = React.useState(false);
  const [search, setSearch] = React.useState("");

  const iconify = useIconifyIcons({ q: search }, { enabled: !!search });
  const icons = iconify.data || [];

  return (
    <div className="dd-flex dd-items-center dd-space-x-4">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button variant="outline" className="dd-w-full" justify="start">
            {value ? <IconItem icon={value} /> : <>+ Set icon</>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="dd-p-0" side="right" align="start">
          <Command>
            <CommandInput
              value={search}
              onValueChange={setSearch}
              placeholder="Select a icon"
            />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup>
                {icons.map((icon) => {
                  return (
                    <CommandItem
                      key={icon}
                      value={icon}
                      onSelect={(value) => {
                        onChange?.(value);
                        setOpen(false);
                        setSearch("");
                      }}
                    >
                      <IconItem icon={icon} />
                    </CommandItem>
                  );
                })}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}
