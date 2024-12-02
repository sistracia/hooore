"use client";

import { CharacterCount } from "@tiptap/extension-character-count";
import { Color } from "@tiptap/extension-color";
import { Dropcursor } from "@tiptap/extension-dropcursor";
import { FocusClasses as Focus } from "@tiptap/extension-focus";
import { FontFamily } from "@tiptap/extension-font-family";
import { Highlight } from "@tiptap/extension-highlight";
import { Placeholder } from "@tiptap/extension-placeholder";
import { Subscript } from "@tiptap/extension-subscript";
import { Superscript } from "@tiptap/extension-superscript";
import { TaskItem } from "@tiptap/extension-task-item";
import { TaskList } from "@tiptap/extension-task-list";
import { TextAlign } from "@tiptap/extension-text-align";
import { TextStyle } from "@tiptap/extension-text-style";
import { Typography } from "@tiptap/extension-typography";
import { Underline } from "@tiptap/extension-underline";
import { StarterKit } from "@tiptap/starter-kit";

import { BlockquoteFigure } from "./blockquote-figure";
import { CodeBlock } from "./code-block";
import { Column } from "./column";
import { Columns } from "./columns";
import { Document } from "./document";
import { Figcaption } from "./figcaption";
import { FontSize } from "./font-size";
import { Heading } from "./heading";
import { HorizontalRule } from "./horizontal-rule";
import { ImageBlock } from "./image-block";
import { ImageUpload } from "./image-upload";
import { Link } from "./link";
import { SlashCommand } from "./slash-command";
import { Table } from "./table";
import { TableCell } from "./table-cell";
import { TableHeader } from "./table-header";
import { TableRow } from "./table-row";
import { TrailingNode } from "./trailing-node";

export const ExtensionKit = () => [
  Document,
  Columns,
  TaskList,
  TaskItem.configure({
    nested: true,
  }),
  Column,
  Selection,
  Heading.configure({
    levels: [1, 2, 3, 4, 5, 6],
  }),
  HorizontalRule,
  //   UniqueID.configure({
  //     types: ["paragraph", "heading", "blockquote", "codeBlock", "table"],
  //     filterTransaction: (transaction) => !isChangeOrigin(transaction),
  //   }),
  StarterKit.configure({
    document: false,
    dropcursor: false,
    heading: false,
    horizontalRule: false,
    blockquote: false,
    history: false,
    codeBlock: false,
  }),
  //   Details.configure({
  //     persist: true,
  //     HTMLAttributes: {
  //       class: "details",
  //     },
  //   }),
  //   DetailsContent,
  //   DetailsSummary,
  CodeBlock,
  TextStyle,
  FontSize,
  FontFamily,
  Color,
  TrailingNode,
  Link.configure({
    openOnClick: false,
  }),
  Highlight.configure({ multicolor: true }),
  Underline,
  CharacterCount.configure({ limit: 50000 }),
  //   TableOfContents,
  //   TableOfContentsNode,
  ImageUpload.configure(),
  ImageBlock,
  //   FileHandler.configure({
  //     allowedMimeTypes: ["image/png", "image/jpeg", "image/gif", "image/webp"],
  //     onDrop: (currentEditor, files, pos) => {
  //       files.forEach(async (file) => {
  //         const url = await API.uploadImage(file);

  //         currentEditor.chain().setImageBlockAt({ pos, src: url }).focus().run();
  //       });
  //     },
  //     onPaste: (currentEditor, files) => {
  //       files.forEach(async (file) => {
  //         const url = await API.uploadImage(file);

  //         return currentEditor
  //           .chain()
  //           .setImageBlockAt({
  //             pos: currentEditor.state.selection.anchor,
  //             src: url,
  //           })
  //           .focus()
  //           .run();
  //       });
  //     },
  //   }),
  //   Emoji.configure({
  //     enableEmoticons: true,
  //     suggestion: emojiSuggestion,
  //   }),
  TextAlign.extend({
    addKeyboardShortcuts() {
      return {};
    },
  }).configure({
    types: ["heading", "paragraph"],
  }),
  Subscript,
  Superscript,
  Table,
  TableCell,
  TableHeader,
  TableRow,
  Typography,
  Placeholder.configure({
    includeChildren: true,
    showOnlyCurrent: false,
    placeholder: () => "",
  }),
  SlashCommand,
  Focus,
  Figcaption,
  BlockquoteFigure,
  Dropcursor.configure({
    width: 2,
    class: "ProseMirror-dropcursor border-black",
  }),
];

export default ExtensionKit;
