import { useEditor } from '@hooore/editor-headless/components'
import { cn } from '@hooore/utils'
import { SigmaIcon } from 'lucide-react'
import { Button } from '../ui/button'

export const MathSelector = () => {
  const { editor } = useEditor()

  if (!editor) return null

  return (
    <Button
      variant="ghost"
      size="sm"
      className="editor-w-12 editor-rounded-none"
      onClick={() => {
        if (editor.isActive('math')) {
          editor.chain().focus().unsetLatex().run()
        } else {
          const { from, to } = editor.state.selection
          const latex = editor.state.doc.textBetween(from, to)

          if (!latex) return

          editor.chain().focus().setLatex({ latex }).run()
        }
      }}
    >
      <SigmaIcon
        className={cn('editor-size-4', {
          'editor-text-blue-500': editor.isActive('math'),
        })}
        strokeWidth={2.3}
      />
    </Button>
  )
}
