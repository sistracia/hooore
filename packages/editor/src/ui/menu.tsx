'use client'

import { Menu as MenuIcon } from 'lucide-react'
import { Button } from './button'
import { Popover, PopoverContent, PopoverTrigger } from './popover'

// TODO implement multiple fonts editor
// const fonts = [
//   {
//     font: "Default",
//     icon: <FontDefault className="editor-h-4 editor-w-4" />,
//   },
//   {
//     font: "Serif",
//     icon: <FontSerif className="editor-h-4 editor-w-4" />,
//   },
//   {
//     font: "Mono",
//     icon: <FontMono className="editor-h-4 editor-w-4" />,
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
      <PopoverContent className="editor-w-52 editor-p-2" align="end">
        {/* <div className="editor-p-2">
          <p className="editor-p-2 editor-text-xs editor-font-medium editor-text-stone-500">Font</p>
          {fonts.map(({ font, icon }) => (
            <button
              key={font}
              className="editor-flex editor-w-full editor-items-center editor-justify-between editor-rounded editor-px-2 editor-py-1 editor-text-sm editor-text-stone-600 hover:editor-bg-stone-100"
              onClick={() => {
                setFont(font);
              }}
            >
              <div className="editor-flex editor-items-center editor-space-x-2">
                <div className="editor-rounded-sm editor-border editor-border-stone-200 editor-p-1">
                  {icon}
                </div>
                <span>{font}</span>
              </div>
              {currentFont === font && <Check className="editor-h-4 editor-w-4" />}
            </button>
          ))}
        </div> */}
        <p className="editor-text-muted-foreground editor-p-2 editor-text-xs editor-font-medium">
          Appearance
        </p>
      </PopoverContent>
    </Popover>
  )
}
