import { BubbleMenu as BaseBubbleMenu } from "@tiptap/react";
import React, { useCallback } from "react";
import { Item as PopoverMenuItem } from "../components/popover-menu";

import { Icon } from "../components/icon";
import type { MenuProps, ShouldShowProps } from "../components/menu.types";
import { ToolbarWrapper } from "../components/toolbar";
import { isColumnGripSelected } from "../utils/table-column";

export const TableColumnMenu = React.memo(
  ({ editor, appendTo }: MenuProps): JSX.Element => {
    const shouldShow = useCallback(
      ({ view, state, from }: ShouldShowProps) => {
        if (!state) {
          return false;
        }

        return isColumnGripSelected({ editor, view, state, from: from || 0 });
      },
      [editor],
    );

    const onAddColumnBefore = useCallback(() => {
      editor.chain().focus().addColumnBefore().run();
    }, [editor]);

    const onAddColumnAfter = useCallback(() => {
      editor.chain().focus().addColumnAfter().run();
    }, [editor]);

    const onDeleteColumn = useCallback(() => {
      editor.chain().focus().deleteColumn().run();
    }, [editor]);

    return (
      <BaseBubbleMenu
        editor={editor}
        pluginKey="tableColumnMenu"
        updateDelay={0}
        tippyOptions={{
          appendTo: () => {
            return appendTo?.current;
          },
          offset: [0, 15],
          popperOptions: {
            modifiers: [{ name: "flip", enabled: false }],
          },
        }}
        shouldShow={shouldShow}
      >
        <ToolbarWrapper isVertical>
          <PopoverMenuItem
            iconComponent={<Icon name="ArrowLeftToLine" />}
            close={false}
            label="Add column before"
            onClick={onAddColumnBefore}
          />
          <PopoverMenuItem
            iconComponent={<Icon name="ArrowRightToLine" />}
            close={false}
            label="Add column after"
            onClick={onAddColumnAfter}
          />
          <PopoverMenuItem
            icon="Trash"
            close={false}
            label="Delete column"
            onClick={onDeleteColumn}
          />
        </ToolbarWrapper>
      </BaseBubbleMenu>
    );
  },
);

TableColumnMenu.displayName = "TableColumnMenu";
