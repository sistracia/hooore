"use client";

import { EditorContent, useEditor } from "@tiptap/react";
import { StarterKit } from "@tiptap/starter-kit";

export function Tiptap() {
  const editor = useEditor({
    extensions: [StarterKit],
    immediatelyRender: false,
    content: "<p>Hello World! 🌎️</p>",
  });

  return <EditorContent editor={editor} />;
}
