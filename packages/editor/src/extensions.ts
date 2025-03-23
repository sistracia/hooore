import type { EditorContent } from '@hooore/editor-headless/components'
import {
  CharacterCount,
  CodeBlockLowlight,
  Color,
  CustomKeymap,
  GlobalDragHandle,
  HighlightExtension,
  HorizontalRule,
  MarkdownExtension,
  Mathematics,
  Placeholder,
  StarterKit,
  TaskItem,
  TaskList,
  TextStyle,
  TiptapImage,
  TiptapLink,
  TiptapUnderline,
  Twitter,
  UpdatedImage,
  Youtube,
} from '@hooore/editor-headless/extensions'
import { UploadImagesPlugin } from '@hooore/editor-headless/plugins'

import { cn } from '@hooore/utils'
import { common, createLowlight } from 'lowlight'

//You can overwrite the placeholder with your own configuration
const placeholder = Placeholder
const tiptapLink = TiptapLink.configure({
  HTMLAttributes: {
    class: cn(
      'editor-text-muted-foreground hover:editor-text-primary editor-cursor-pointer editor-underline editor-underline-offset-[3px] editor-transition-colors',
    ),
  },
})

const tiptapImage = TiptapImage.extend({
  addProseMirrorPlugins() {
    return [
      UploadImagesPlugin({
        imageClass: cn(
          'editor-rounded-lg editor-border editor-border-stone-200 editor-opacity-40',
        ),
      }),
    ]
  },
}).configure({
  allowBase64: true,
  HTMLAttributes: {
    class: cn('editor-border-muted editor-rounded-lg editor-border'),
  },
})

const updatedImage = UpdatedImage.configure({
  HTMLAttributes: {
    class: cn('editor-border-muted editor-rounded-lg editor-border'),
  },
})

const taskList = TaskList.configure({
  HTMLAttributes: {
    class: cn('editor-not-prose editor-pl-2'),
  },
})
const taskItem = TaskItem.configure({
  HTMLAttributes: {
    class: cn('editor-my-4 editor-flex editor-items-start gap-2'),
  },
  nested: true,
})

const horizontalRule = HorizontalRule.configure({
  HTMLAttributes: {
    class: cn(
      'editor-border-muted-foreground editor-mb-6 editor-mt-4 editor-border-t',
    ),
  },
})

const starterKit = StarterKit.configure({
  bulletList: {
    HTMLAttributes: {
      class: cn(
        '-editor-mt-2 editor-list-outside editor-list-disc editor-leading-3',
      ),
    },
  },
  orderedList: {
    HTMLAttributes: {
      class: cn(
        '-editor-mt-2 editor-list-outside editor-list-decimal editor-leading-3',
      ),
    },
  },
  listItem: {
    HTMLAttributes: {
      class: cn('-editor-mb-2 editor-leading-normal'),
    },
  },
  blockquote: {
    HTMLAttributes: {
      class: cn('editor-border-primary editor-border-l-4'),
    },
  },
  codeBlock: {
    HTMLAttributes: {
      class: cn(
        'editor-bg-muted editor-text-muted-foreground editor-rounded-md editor-border editor-p-5 editor-font-mono editor-font-medium',
      ),
    },
  },
  code: {
    HTMLAttributes: {
      class: cn(
        'editor-bg-muted editor-rounded-md editor-px-1.5 editor-py-1 editor-font-mono editor-font-medium',
      ),
      spellcheck: 'false',
    },
  },
  horizontalRule: false,
  dropcursor: {
    color: '#DBEAFE',
    width: 4,
  },
  gapcursor: false,
})

const codeBlockLowlight = CodeBlockLowlight.configure({
  // configure lowlight: common /  all / use highlightJS in case there is a need to specify certain language grammars only
  // common: covers 37 language grammars which should be good enough in most cases
  lowlight: createLowlight(common),
})

const youtube = Youtube.configure({
  HTMLAttributes: {
    class: cn('editor-border-muted editor-rounded-lg border'),
  },
  inline: false,
})

const twitter = Twitter.configure({
  HTMLAttributes: {
    class: cn('editor-not-prose'),
  },
  inline: false,
})

const mathematics = Mathematics.configure({
  HTMLAttributes: {
    class: cn(
      'editor-text-foreground hover:editor-bg-accent editor-cursor-pointer editor-rounded p-1',
    ),
  },
  katexOptions: {
    throwOnError: false,
  },
})

const characterCount = CharacterCount.configure()

const markdownExtension = MarkdownExtension.configure({
  html: true,
  tightLists: true,
  tightListClass: 'tight',
  bulletListMarker: '-',
  linkify: false,
  breaks: false,
  transformPastedText: false,
  transformCopiedText: false,
})

export const defaultExtensions: NonNullable<
  React.ComponentProps<typeof EditorContent>['extensions']
> = [
  starterKit,
  placeholder,
  tiptapLink,
  tiptapImage,
  updatedImage,
  taskList,
  taskItem,
  horizontalRule,
  codeBlockLowlight,
  youtube,
  twitter,
  mathematics,
  characterCount,
  TiptapUnderline,
  markdownExtension,
  HighlightExtension.configure({
    multicolor: true,
  }),
  TextStyle,
  Color,
  CustomKeymap,
  GlobalDragHandle,
]
