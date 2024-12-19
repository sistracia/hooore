"use client";

import type { JSONContent } from "@repo/editor-headless/components";
import AdvanceEditor from "@repo/editor/advance-editor";
import { useState } from "react";
export default function BlogsPage() {
  const [value, setValue] = useState<JSONContent>({
    type: "doc",
    content: [],
  });
  return <AdvanceEditor initialValue={value} onChange={setValue} />;
}
