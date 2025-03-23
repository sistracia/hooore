import { EditorBubbleItem, useEditor } from '@hooore/editor-headless/components'
import { Check, ChevronDown } from 'lucide-react'

import { Button } from '../ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
export interface BubbleColorMenuItem {
  name: string
  color: string
}

const TEXT_COLORS: BubbleColorMenuItem[] = [
  {
    name: 'Default',
    color: 'var(--novel-black)',
  },
  {
    name: 'Purple',
    color: '#9333EA',
  },
  {
    name: 'Red',
    color: '#E00000',
  },
  {
    name: 'Yellow',
    color: '#EAB308',
  },
  {
    name: 'Blue',
    color: '#2563EB',
  },
  {
    name: 'Green',
    color: '#008A00',
  },
  {
    name: 'Orange',
    color: '#FFA500',
  },
  {
    name: 'Pink',
    color: '#BA4081',
  },
  {
    name: 'Gray',
    color: '#A8A29E',
  },
]

const HIGHLIGHT_COLORS: BubbleColorMenuItem[] = [
  {
    name: 'Default',
    color: 'var(--novel-highlight-default)',
  },
  {
    name: 'Purple',
    color: 'var(--novel-highlight-purple)',
  },
  {
    name: 'Red',
    color: 'var(--novel-highlight-red)',
  },
  {
    name: 'Yellow',
    color: 'var(--novel-highlight-yellow)',
  },
  {
    name: 'Blue',
    color: 'var(--novel-highlight-blue)',
  },
  {
    name: 'Green',
    color: 'var(--novel-highlight-green)',
  },
  {
    name: 'Orange',
    color: 'var(--novel-highlight-orange)',
  },
  {
    name: 'Pink',
    color: 'var(--novel-highlight-pink)',
  },
  {
    name: 'Gray',
    color: 'var(--novel-highlight-gray)',
  },
]

interface ColorSelectorProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export const ColorSelector = ({ open, onOpenChange }: ColorSelectorProps) => {
  const { editor } = useEditor()

  if (!editor) return null
  const activeColorItem = TEXT_COLORS.find(({ color }) =>
    editor.isActive('textStyle', { color }),
  )

  const activeHighlightItem = HIGHLIGHT_COLORS.find(({ color }) =>
    editor.isActive('highlight', { color }),
  )

  return (
    <Popover modal={true} open={open} onOpenChange={onOpenChange}>
      <PopoverTrigger asChild>
        <Button
          size="sm"
          className="editor-gap-2 editor-rounded-none"
          variant="ghost"
        >
          <span
            className="editor-rounded-sm editor-px-1"
            style={{
              color: activeColorItem?.color,
              backgroundColor: activeHighlightItem?.color,
            }}
          >
            A
          </span>
          <ChevronDown className="editor-h-4 editor-w-4" />
        </Button>
      </PopoverTrigger>

      <PopoverContent
        sideOffset={5}
        className="editor-my-1 editor-flex editor-max-h-80 editor-w-48 editor-flex-col editor-overflow-hidden editor-overflow-y-auto editor-rounded editor-border editor-p-1 editor-shadow-xl"
        align="start"
      >
        <div className="editor-flex editor-flex-col">
          <div className="text-muted-foreground editor-my-1 editor-px-2 editor-text-sm editor-font-semibold">
            Color
          </div>
          {TEXT_COLORS.map(({ name, color }) => (
            <EditorBubbleItem
              key={name}
              onSelect={() => {
                editor.commands.unsetColor()
                if (name !== 'Default') {
                  editor
                    .chain()
                    .focus()
                    .setColor(color || '')
                    .run()
                }
                onOpenChange(false)
              }}
              className="hover:bg-accent editor-flex editor-cursor-pointer editor-items-center editor-justify-between editor-px-2 editor-py-1 editor-text-sm"
            >
              <div className="editor-flex editor-items-center editor-gap-2">
                <div
                  className="editor-rounded-sm editor-border editor-px-2 editor-py-px editor-font-medium"
                  style={{ color }}
                >
                  A
                </div>
                <span>{name}</span>
              </div>
            </EditorBubbleItem>
          ))}
        </div>
        <div>
          <div className="text-muted-foreground editor-my-1 editor-px-2 editor-text-sm editor-font-semibold">
            Background
          </div>
          {HIGHLIGHT_COLORS.map(({ name, color }) => (
            <EditorBubbleItem
              key={name}
              onSelect={() => {
                editor.commands.unsetHighlight()
                if (name !== 'Default') {
                  editor.chain().focus().setHighlight({ color }).run()
                }
                onOpenChange(false)
              }}
              className="hover:bg-accent editor-flex editor-cursor-pointer editor-items-center editor-justify-between editor-px-2 editor-py-1 editor-text-sm"
            >
              <div className="editor-flex editor-items-center editor-gap-2">
                <div
                  className="editor-rounded-sm editor-border editor-px-2 editor-py-px editor-font-medium"
                  style={{ backgroundColor: color }}
                >
                  A
                </div>
                <span>{name}</span>
              </div>
              {editor.isActive('highlight', { color }) && (
                <Check className="editor-h-4 editor-w-4" />
              )}
            </EditorBubbleItem>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  )
}
