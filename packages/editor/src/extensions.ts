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
} from "@repo/editor-headless/extensions";
import { UploadImagesPlugin } from "@repo/editor-headless/plugins";

import { cn } from "@repo/utils";
import { common, createLowlight } from "lowlight";

//You can overwrite the placeholder with your own configuration
const placeholder = Placeholder;
const tiptapLink = TiptapLink.configure({
  HTMLAttributes: {
    class: cn(
      "text-muted-foreground hover:text-primary cursor-pointer underline underline-offset-[3px] transition-colors",
    ),
  },
});

const tiptapImage = TiptapImage.extend({
  addProseMirrorPlugins() {
    return [
      UploadImagesPlugin({
        imageClass: cn("rounded-lg border border-stone-200 opacity-40"),
      }),
    ];
  },
}).configure({
  allowBase64: true,
  HTMLAttributes: {
    class: cn("border-muted rounded-lg border"),
  },
});

const updatedImage = UpdatedImage.configure({
  HTMLAttributes: {
    class: cn("border-muted rounded-lg border"),
  },
});

const taskList = TaskList.configure({
  HTMLAttributes: {
    class: cn("not-prose pl-2"),
  },
});
const taskItem = TaskItem.configure({
  HTMLAttributes: {
    class: cn("my-4 flex items-start gap-2"),
  },
  nested: true,
});

const horizontalRule = HorizontalRule.configure({
  HTMLAttributes: {
    class: cn("border-muted-foreground mb-6 mt-4 border-t"),
  },
});

const starterKit = StarterKit.configure({
  bulletList: {
    HTMLAttributes: {
      class: cn("-mt-2 list-outside list-disc leading-3"),
    },
  },
  orderedList: {
    HTMLAttributes: {
      class: cn("-mt-2 list-outside list-decimal leading-3"),
    },
  },
  listItem: {
    HTMLAttributes: {
      class: cn("-mb-2 leading-normal"),
    },
  },
  blockquote: {
    HTMLAttributes: {
      class: cn("border-primary border-l-4"),
    },
  },
  codeBlock: {
    HTMLAttributes: {
      class: cn(
        "bg-muted text-muted-foreground rounded-md border p-5 font-mono font-medium",
      ),
    },
  },
  code: {
    HTMLAttributes: {
      class: cn("bg-muted rounded-md px-1.5 py-1 font-mono font-medium"),
      spellcheck: "false",
    },
  },
  horizontalRule: false,
  dropcursor: {
    color: "#DBEAFE",
    width: 4,
  },
  gapcursor: false,
});

const codeBlockLowlight = CodeBlockLowlight.configure({
  // configure lowlight: common /  all / use highlightJS in case there is a need to specify certain language grammars only
  // common: covers 37 language grammars which should be good enough in most cases
  lowlight: createLowlight(common),
});

const youtube = Youtube.configure({
  HTMLAttributes: {
    class: cn("border-muted rounded-lg border"),
  },
  inline: false,
});

const twitter = Twitter.configure({
  HTMLAttributes: {
    class: cn("not-prose"),
  },
  inline: false,
});

const mathematics = Mathematics.configure({
  HTMLAttributes: {
    class: cn("text-foreground hover:bg-accent cursor-pointer rounded p-1"),
  },
  katexOptions: {
    throwOnError: false,
  },
});

const characterCount = CharacterCount.configure();

const markdownExtension = MarkdownExtension.configure({
  html: true,
  tightLists: true,
  tightListClass: "tight",
  bulletListMarker: "-",
  linkify: false,
  breaks: false,
  transformPastedText: false,
  transformCopiedText: false,
});

export const defaultExtensions = [
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
];
