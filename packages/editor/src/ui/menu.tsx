"use client";

import { Menu as MenuIcon } from "lucide-react";
import { Button } from "./button";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";

// TODO implement multiple fonts editor
// const fonts = [
//   {
//     font: "Default",
//     icon: <FontDefault className="h-4 w-4" />,
//   },
//   {
//     font: "Serif",
//     icon: <FontSerif className="h-4 w-4" />,
//   },
//   {
//     font: "Mono",
//     icon: <FontMono className="h-4 w-4" />,
//   },
// ];

export default function Menu() {
  // const { font: currentFont, setFont } = useContext(AppContext);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon">
          <MenuIcon width={16} />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-52 p-2" align="end">
        {/* <div className="p-2">
          <p className="p-2 text-xs font-medium text-stone-500">Font</p>
          {fonts.map(({ font, icon }) => (
            <button
              key={font}
              className="flex w-full items-center justify-between rounded px-2 py-1 text-sm text-stone-600 hover:bg-stone-100"
              onClick={() => {
                setFont(font);
              }}
            >
              <div className="flex items-center space-x-2">
                <div className="rounded-sm border border-stone-200 p-1">
                  {icon}
                </div>
                <span>{font}</span>
              </div>
              {currentFont === font && <Check className="h-4 w-4" />}
            </button>
          ))}
        </div> */}
        <p className="text-muted-foreground p-2 text-xs font-medium">
          Appearance
        </p>
      </PopoverContent>
    </Popover>
  );
}
