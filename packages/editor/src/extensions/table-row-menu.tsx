import { BubbleMenu as BaseBubbleMenu } from "@tiptap/react";
import React, { useCallback } from "react";
import { Item as PopoverMenuItem } from "../components/popover-menu";

import { Icon } from "../components/icon";
import type { MenuProps, ShouldShowProps } from "../components/menu.types";
import { ToolbarWrapper } from "../components/toolbar";
import { isRowGripSelected } from "../utils/table-row";

export const TableRowMenu = React.memo(
  ({ editor, appendTo }: MenuProps): JSX.Element => {
    const shouldShow = useCallback(
      ({ view, state, from }: ShouldShowProps) => {
        if (!state || !from) {
          return false;
        }

        return isRowGripSelected({ editor, view, state, from });
      },
      [editor],
    );

    const onAddRowBefore = useCallback(() => {
      editor.chain().focus().addRowBefore().run();
    }, [editor]);

    const onAddRowAfter = useCallback(() => {
      editor.chain().focus().addRowAfter().run();
    }, [editor]);

    const onDeleteRow = useCallback(() => {
      editor.chain().focus().deleteRow().run();
    }, [editor]);

    return (
      <BaseBubbleMenu
        editor={editor}
        pluginKey="tableRowMenu"
        updateDelay={0}
        tippyOptions={{
          appendTo: () => {
            return appendTo?.current;
          },
          placement: "left",
          offset: [0, 15],
          popperOptions: {
            modifiers: [{ name: "flip", enabled: false }],
          },
        }}
        shouldShow={shouldShow}
      >
        <ToolbarWrapper isVertical>
          <PopoverMenuItem
            iconComponent={<Icon name="ArrowUpToLine" />}
            close={false}
            label="Add row before"
            onClick={onAddRowBefore}
          />
          <PopoverMenuItem
            iconComponent={<Icon name="ArrowDownToLine" />}
            close={false}
            label="Add row after"
            onClick={onAddRowAfter}
          />
          <PopoverMenuItem
            icon="Trash"
            close={false}
            label="Delete row"
            onClick={onDeleteRow}
          />
        </ToolbarWrapper>
      </BaseBubbleMenu>
    );
  },
);

TableRowMenu.displayName = "TableRowMenu";
