"use client";

import { TailwindAdvancedEditor } from "@hooore/editor/advance-editor";
import type { JSONContent } from "novel";
import { useState } from "react";
export default function BlogsPage() {
  const [value, setValue] = useState<JSONContent>({
    type: "doc",
    content: [],
  });
  return (
    <TailwindAdvancedEditor
      initialValue={value}
      onChange={setValue}
      immediatelyRender={false}
    />
  );
}
