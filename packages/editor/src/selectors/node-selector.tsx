import { EditorBubbleItem, useEditor } from '@hooore/editor-headless/components'
import {
  Check,
  CheckSquare,
  ChevronDown,
  Code,
  Heading1,
  Heading2,
  Heading3,
  ListOrdered,
  type LucideIcon,
  TextIcon,
  TextQuote,
} from 'lucide-react'

import { Popover } from '@radix-ui/react-popover'
import { Button } from '../ui/button'
import { PopoverContent, PopoverTrigger } from '../ui/popover'

export type SelectorItem = {
  name: string
  icon: LucideIcon
  command: (editor: ReturnType<typeof useEditor>['editor']) => void
  isActive: (
    editor: ReturnType<typeof useEditor>['editor'],
  ) => boolean | undefined
}

const items: SelectorItem[] = [
  {
    name: 'Text',
    icon: TextIcon,
    command: (editor) => {
      if (!editor) return

      return editor.chain().focus().clearNodes().run()
    },
    // I feel like there has to be a more efficient way to do this – feel free to PR if you know how!
    isActive: (editor) => {
      if (!editor) return

      return (
        editor.isActive('paragraph') &&
        !editor.isActive('bulletList') &&
        !editor.isActive('orderedList')
      )
    },
  },
  {
    name: 'Heading 1',
    icon: Heading1,
    command: (editor) => {
      if (!editor) return

      return editor
        .chain()
        .focus()
        .clearNodes()
        .toggleHeading({ level: 1 })
        .run()
    },
    isActive: (editor) => {
      if (!editor) return

      return editor.isActive('heading', { level: 1 })
    },
  },
  {
    name: 'Heading 2',
    icon: Heading2,
    command: (editor) => {
      if (!editor) return

      return editor
        .chain()
        .focus()
        .clearNodes()
        .toggleHeading({ level: 2 })
        .run()
    },
    isActive: (editor) => {
      if (!editor) return

      return editor.isActive('heading', { level: 2 })
    },
  },
  {
    name: 'Heading 3',
    icon: Heading3,
    command: (editor) => {
      if (!editor) return

      return editor
        .chain()
        .focus()
        .clearNodes()
        .toggleHeading({ level: 3 })
        .run()
    },
    isActive: (editor) => {
      if (!editor) return

      return editor.isActive('heading', { level: 3 })
    },
  },
  {
    name: 'To-do List',
    icon: CheckSquare,
    command: (editor) => {
      if (!editor) return

      return editor.chain().focus().clearNodes().toggleTaskList().run()
    },
    isActive: (editor) => {
      if (!editor) return

      return editor.isActive('taskItem')
    },
  },
  {
    name: 'Bullet List',
    icon: ListOrdered,
    command: (editor) => {
      if (!editor) return

      return editor.chain().focus().clearNodes().toggleBulletList().run()
    },
    isActive: (editor) => {
      if (!editor) return

      return editor.isActive('bulletList')
    },
  },
  {
    name: 'Numbered List',
    icon: ListOrdered,
    command: (editor) => {
      if (!editor) return

      return editor.chain().focus().clearNodes().toggleOrderedList().run()
    },
    isActive: (editor) => {
      if (!editor) return

      return editor.isActive('orderedList')
    },
  },
  {
    name: 'Quote',
    icon: TextQuote,
    command: (editor) => {
      if (!editor) return

      return editor.chain().focus().clearNodes().toggleBlockquote().run()
    },
    isActive: (editor) => {
      if (!editor) return

      return editor.isActive('blockquote')
    },
  },
  {
    name: 'Code',
    icon: Code,
    command: (editor) => {
      if (!editor) return

      return editor.chain().focus().clearNodes().toggleCodeBlock().run()
    },
    isActive: (editor) => {
      if (!editor) return

      return editor.isActive('codeBlock')
    },
  },
]
interface NodeSelectorProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export const NodeSelector = ({ open, onOpenChange }: NodeSelectorProps) => {
  const { editor } = useEditor()
  if (!editor) return null
  const activeItem = items.filter((item) => item.isActive(editor)).pop() ?? {
    name: 'Multiple',
  }

  return (
    <Popover modal={true} open={open} onOpenChange={onOpenChange}>
      <PopoverTrigger
        asChild
        className="hover:editor-bg-accent editor-gap-2 editor-rounded-none editor-border-none focus:editor-ring-0"
      >
        <Button size="sm" variant="ghost" className="editor-gap-2">
          <span className="editor-whitespace-nowrap editor-text-sm">
            {activeItem.name}
          </span>
          <ChevronDown className="editor-h-4 editor-w-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        sideOffset={5}
        align="start"
        className="editor-w-48 editor-p-1"
      >
        {items.map((item) => (
          <EditorBubbleItem
            key={item.name}
            onSelect={(editor) => {
              item.command(editor)
              onOpenChange(false)
            }}
            className="hover:editor-bg-accent editor-flex editor-cursor-pointer editor-items-center editor-justify-between editor-rounded-sm editor-px-2 editor-py-1 editor-text-sm"
          >
            <div className="editor-flex editor-items-center editor-space-x-2">
              <div className="editor-rounded-sm editor-border editor-p-1">
                <item.icon className="editor-h-3 editor-w-3" />
              </div>
              <span>{item.name}</span>
            </div>
            {activeItem.name === item.name && (
              <Check className="editor-h-4 editor-w-4" />
            )}
          </EditorBubbleItem>
        ))}
      </PopoverContent>
    </Popover>
  )
}
