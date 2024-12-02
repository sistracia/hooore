import * as Popover from "@radix-ui/react-popover";
import { Icon } from "./icon";
import { LinkEditorPanel } from "./link-editor-panel";
import { ToolbarButton } from "./toolbar";

export type EditLinkPopoverProps = {
  onSetLink: (link: string, openInNewTab?: boolean) => void;
};

export const EditLinkPopover = ({ onSetLink }: EditLinkPopoverProps) => {
  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <ToolbarButton tooltip="Set Link">
          <Icon name="Link" />
        </ToolbarButton>
      </Popover.Trigger>
      <Popover.Content>
        <LinkEditorPanel onSetLink={onSetLink} />
      </Popover.Content>
    </Popover.Root>
  );
};
