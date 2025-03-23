'use client'

import { useEditor } from '@hooore/editor-headless/components'
import { cn } from '@hooore/utils'
import { Popover, PopoverTrigger } from '@radix-ui/react-popover'
import { Check, Trash } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { Button } from '../ui/button'
import { PopoverContent } from '../ui/popover'

export function isValidUrl(url: string) {
  try {
    new URL(url)
    return true
  } catch (_e) {
    return false
  }
}
export function getUrlFromString(str: string) {
  if (isValidUrl(str)) return str
  try {
    if (str.includes('.') && !str.includes(' ')) {
      return new URL(`https://${str}`).toString()
    }
  } catch (_e) {
    return null
  }
}
interface LinkSelectorProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export const LinkSelector = ({ open, onOpenChange }: LinkSelectorProps) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const { editor } = useEditor()

  // Autofocus on input by default
  useEffect(() => {
    inputRef.current?.focus()
  })
  if (!editor) return null

  return (
    <Popover modal={true} open={open} onOpenChange={onOpenChange}>
      <PopoverTrigger asChild>
        <Button
          size="sm"
          variant="ghost"
          className="editor-gap-2 editor-rounded-none editor-border-none"
        >
          <p className="editor-text-base">↗</p>
          <p
            className={cn(
              'editor-underline editor-decoration-stone-400 editor-underline-offset-4',
              {
                'editor-text-blue-500': editor.isActive('link'),
              },
            )}
          >
            Link
          </p>
        </Button>
      </PopoverTrigger>
      <PopoverContent
        align="start"
        className="editor-w-60 editor-p-0"
        sideOffset={10}
      >
        <form
          onSubmit={(e) => {
            const target = e.currentTarget as HTMLFormElement
            e.preventDefault()
            const input = target[0] as HTMLInputElement
            const url = getUrlFromString(input.value)
            if (url) {
              editor.chain().focus().setLink({ href: url }).run()
              onOpenChange(false)
            }
          }}
          className="editor-flex editor-p-1"
        >
          <input
            ref={inputRef}
            type="text"
            placeholder="Paste a link"
            className="editor-bg-background editor-flex-1 editor-p-1 editor-text-sm editor-outline-none"
            defaultValue={editor.getAttributes('link').href || ''}
          />
          {editor.getAttributes('link').href ? (
            <Button
              size="icon"
              variant="outline"
              type="button"
              className="editor-flex editor-h-8 editor-items-center editor-rounded-sm editor-p-1 editor-text-red-600 editor-transition-all hover:editor-bg-red-100 dark:hover:editor-bg-red-800"
              onClick={() => {
                editor.chain().focus().unsetLink().run()
                const input = inputRef.current
                if (input) {
                  input.value = ''
                }
                onOpenChange(false)
              }}
            >
              <Trash className="editor-h-4 editor-w-4" />
            </Button>
          ) : (
            <Button size="icon" className="editor-h-8">
              <Check className="editor-h-4 editor-w-4" />
            </Button>
          )}
        </form>
      </PopoverContent>
    </Popover>
  )
}
