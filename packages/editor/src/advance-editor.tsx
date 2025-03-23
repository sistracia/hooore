'use client'
import {
  EditorBubble,
  EditorCommand,
  EditorCommandEmpty,
  EditorCommandItem,
  EditorCommandList,
  EditorContent,
  EditorRoot,
  type JSONContent,
} from '@hooore/editor-headless/components'
import {
  ImageResizer,
  handleCommandNavigation,
} from '@hooore/editor-headless/extensions'
import { defaultExtensions } from './extensions'

import {
  handleImageDrop,
  handleImagePaste,
} from '@hooore/editor-headless/plugins'
import { useState } from 'react'
import { uploadFn } from './image-upload'
import { ColorSelector } from './selectors/color-selector'
import { LinkSelector } from './selectors/link-selector'
import { NodeSelector } from './selectors/node-selector'
import { TextButtons } from './selectors/text-buttons'
import { slashCommand, suggestionItems } from './slash-command'
import { Separator } from './ui/separator'

const extensions = [...defaultExtensions, slashCommand]

export type TailwindAdvancedEditorProps = {
  initialValue?: JSONContent
  immediatelyRender?: boolean
  onChange: (value: JSONContent) => void
}

export const TailwindAdvancedEditor = ({
  initialValue,
  immediatelyRender,
  onChange,
}: TailwindAdvancedEditorProps) => {
  const [openNode, setOpenNode] = useState(false)
  const [openColor, setOpenColor] = useState(false)
  const [openLink, setOpenLink] = useState(false)

  return (
    <EditorRoot>
      <EditorContent
        initialContent={initialValue}
        extensions={extensions}
        immediatelyRender={immediatelyRender}
        className="tailwind-advanced-editor editor-relative editor-w-full"
        editorProps={{
          handleDOMEvents: {
            keydown: (_view, event) => handleCommandNavigation(event),
          },
          handlePaste: (view, event) => handleImagePaste(view, event, uploadFn),
          handleDrop: (view, event, _slice, moved) =>
            handleImageDrop(view, event, moved, uploadFn),
          attributes: {
            class:
              'editor-prose editor-prose-lg dark:editor-prose-invert prose-headings:editor-font-title editor-font-default focus:editor-outline-none editor-max-w-full',
          },
        }}
        onUpdate={({ editor }) => {
          onChange(editor.getJSON())
        }}
        slotAfter={<ImageResizer />}
      >
        <EditorCommand className="editor-border-muted bg-background editor-z-50 editor-h-auto editor-max-h-[330px] editor-overflow-y-auto editor-rounded-md editor-border editor-px-1 editor-py-2 editor-shadow-md editor-transition-all">
          <EditorCommandEmpty className="editor-text-muted-foreground editor-px-2">
            No results
          </EditorCommandEmpty>
          <EditorCommandList>
            {suggestionItems.map((item) => (
              <EditorCommandItem
                value={item.title}
                onCommand={(val) => item?.command?.(val)}
                className="hover:editor-bg-accent aria-selected:editor-bg-accent editor-flex editor-w-full editor-items-center editor-space-x-2 editor-rounded-md editor-px-2 editor-py-1 editor-text-left editor-text-sm"
                key={item.title}
              >
                <div className="editor-border-muted bg-background editor-flex editor-h-10 editor-w-10 editor-items-center editor-justify-center editor-rounded-md editor-border">
                  {item.icon}
                </div>
                <div>
                  <p className="editor-font-medium">{item.title}</p>
                  <p className="editor-text-muted-foreground editor-text-xs">
                    {item.description}
                  </p>
                </div>
              </EditorCommandItem>
            ))}
          </EditorCommandList>
        </EditorCommand>
        <EditorBubble
          tippyOptions={{
            placement: 'top',
          }}
          className="editor-border-muted bg-background editor-flex editor-w-fit editor-max-w-[90vw] editor-overflow-hidden editor-rounded-md editor-border editor-shadow-xl"
        >
          <Separator orientation="vertical" />
          <NodeSelector open={openNode} onOpenChange={setOpenNode} />
          <Separator orientation="vertical" />

          <LinkSelector open={openLink} onOpenChange={setOpenLink} />
          <Separator orientation="vertical" />
          <TextButtons />
          <Separator orientation="vertical" />
          <ColorSelector open={openColor} onOpenChange={setOpenColor} />
        </EditorBubble>
      </EditorContent>
    </EditorRoot>
  )
}

export default TailwindAdvancedEditor
