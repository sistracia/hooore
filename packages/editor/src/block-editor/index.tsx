"use client";

import { EditorContent } from "@tiptap/react";
import { useRef } from "react";

import { LinkMenu } from "../components/link-menu";

import { useBlockEditor } from "../hooks/use-block-editor";

import { ContentItemMenu } from "../components/content-item-menu";
import { TextMenu } from "../components/text-menu";
import { ColumnsMenu } from "../extensions/columns-menu";
import { ImageBlockMenu } from "../extensions/image-block-menu";
import { TableColumnMenu } from "../extensions/table-colum-menu";
import { TableRowMenu } from "../extensions/table-row-menu";

export const BlockEditor = () => {
  const menuContainerRef = useRef(null);

  const { editor } = useBlockEditor();

  if (!editor) {
    return null;
  }

  return (
    <div className="flex h-full" ref={menuContainerRef}>
      <div className="relative flex h-full flex-1 flex-col overflow-hidden">
        <EditorContent editor={editor} className="flex-1 overflow-y-auto" />
        <ContentItemMenu editor={editor} />
        <LinkMenu editor={editor} appendTo={menuContainerRef} />
        <TextMenu editor={editor} />
        <ColumnsMenu editor={editor} appendTo={menuContainerRef} />
        <TableRowMenu editor={editor} appendTo={menuContainerRef} />
        <TableColumnMenu editor={editor} appendTo={menuContainerRef} />
        <ImageBlockMenu editor={editor} appendTo={menuContainerRef} />
      </div>
    </div>
  );
};
