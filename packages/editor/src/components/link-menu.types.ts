import { Editor } from "@tiptap/react";
import React from "react";

export interface MenuProps {
  editor: Editor;
  // eslint-disable-next-line
  appendTo?: React.RefObject<any>;
  shouldHide?: boolean;
}
