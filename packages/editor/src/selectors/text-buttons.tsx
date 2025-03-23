import { EditorBubbleItem, useEditor } from '@hooore/editor-headless/components'
import { cn } from '@hooore/utils'
import {
  BoldIcon,
  CodeIcon,
  ItalicIcon,
  StrikethroughIcon,
  UnderlineIcon,
} from 'lucide-react'
import { Button } from '../ui/button'
import type { SelectorItem } from './node-selector'

export const TextButtons = () => {
  const { editor } = useEditor()
  if (!editor) return null
  const items: SelectorItem[] = [
    {
      name: 'bold',
      isActive: (editor) => {
        if (!editor) return

        return editor.isActive('bold')
      },
      command: (editor) => {
        if (!editor) return

        return editor.chain().focus().toggleBold().run()
      },
      icon: BoldIcon,
    },
    {
      name: 'italic',
      isActive: (editor) => {
        if (!editor) return

        return editor.isActive('italic')
      },
      command: (editor) => {
        if (!editor) return

        return editor.chain().focus().toggleItalic().run()
      },
      icon: ItalicIcon,
    },
    {
      name: 'underline',
      isActive: (editor) => {
        if (!editor) return

        return editor.isActive('underline')
      },
      command: (editor) => {
        if (!editor) return

        return editor.chain().focus().toggleUnderline().run()
      },
      icon: UnderlineIcon,
    },
    {
      name: 'strike',
      isActive: (editor) => {
        if (!editor) return

        return editor.isActive('strike')
      },
      command: (editor) => {
        if (!editor) return

        return editor.chain().focus().toggleStrike().run()
      },
      icon: StrikethroughIcon,
    },
    {
      name: 'code',
      isActive: (editor) => {
        if (!editor) return

        return editor.isActive('code')
      },
      command: (editor) => {
        if (!editor) return

        return editor.chain().focus().toggleCode().run()
      },
      icon: CodeIcon,
    },
  ]
  return (
    <div className="editor-flex">
      {items.map((item) => (
        <EditorBubbleItem
          key={item.name}
          onSelect={(editor) => {
            item.command(editor)
          }}
        >
          <Button size="sm" className="editor-rounded-none" variant="ghost">
            <item.icon
              className={cn('editor-h-4 editor-w-4', {
                'editor-text-blue-500': item.isActive(editor),
              })}
            />
          </Button>
        </EditorBubbleItem>
      ))}
    </div>
  )
}
