import { BubbleMenu as BaseBubbleMenu, useEditorState } from "@tiptap/react";
import { useCallback } from "react";
import { sticky } from "tippy.js";
import { v4 as uuid } from "uuid";

import { Icon } from "../components/icon";
import type { MenuProps } from "../components/menu.types";
import { ToolbarButton, ToolbarWrapper } from "../components/toolbar";
import { getRenderContainer } from "../utils/get-render-container";
import { ColumnLayout } from "./columns";

export const ColumnsMenu = ({ editor, appendTo }: MenuProps) => {
  const getReferenceClientRect = useCallback(() => {
    const renderContainer = getRenderContainer(editor, "columns");
    const rect =
      renderContainer?.getBoundingClientRect() ||
      new DOMRect(-1000, -1000, 0, 0);

    return rect;
  }, [editor]);

  const shouldShow = useCallback(() => {
    const isColumns = editor.isActive("columns");
    return isColumns;
  }, [editor]);

  const onColumnLeft = useCallback(() => {
    editor.chain().focus().setLayout(ColumnLayout.SidebarLeft).run();
  }, [editor]);

  const onColumnRight = useCallback(() => {
    editor.chain().focus().setLayout(ColumnLayout.SidebarRight).run();
  }, [editor]);

  const onColumnTwo = useCallback(() => {
    editor.chain().focus().setLayout(ColumnLayout.TwoColumn).run();
  }, [editor]);
  const { isColumnLeft, isColumnRight, isColumnTwo } = useEditorState({
    editor,
    selector: (ctx) => {
      return {
        isColumnLeft: ctx.editor.isActive("columns", {
          layout: ColumnLayout.SidebarLeft,
        }),
        isColumnRight: ctx.editor.isActive("columns", {
          layout: ColumnLayout.SidebarRight,
        }),
        isColumnTwo: ctx.editor.isActive("columns", {
          layout: ColumnLayout.TwoColumn,
        }),
      };
    },
  });

  return (
    <BaseBubbleMenu
      editor={editor}
      pluginKey={`columnsMenu-${uuid()}`}
      shouldShow={shouldShow}
      updateDelay={0}
      tippyOptions={{
        offset: [0, 8],
        popperOptions: {
          modifiers: [{ name: "flip", enabled: false }],
        },
        getReferenceClientRect,
        appendTo: () => appendTo?.current,
        plugins: [sticky],
        sticky: "popper",
      }}
    >
      <ToolbarWrapper>
        <ToolbarButton
          tooltip="Sidebar left"
          active={isColumnLeft}
          onClick={onColumnLeft}
        >
          <Icon name="PanelLeft" />
        </ToolbarButton>
        <ToolbarButton
          tooltip="Two columns"
          active={isColumnTwo}
          onClick={onColumnTwo}
        >
          <Icon name="Columns2" />
        </ToolbarButton>
        <ToolbarButton
          tooltip="Sidebar right"
          active={isColumnRight}
          onClick={onColumnRight}
        >
          <Icon name="PanelRight" />
        </ToolbarButton>
      </ToolbarWrapper>
    </BaseBubbleMenu>
  );
};
