import { Icon } from "./icon";
import { Surface } from "./surface";
import { ToolbarButton, ToolbarDivider } from "./toolbar";
import { Tooltip } from "./tooltip";

export type LinkPreviewPanelProps = {
  url: string;
  onEdit: () => void;
  onClear: () => void;
};

export const LinkPreviewPanel = ({
  onClear,
  onEdit,
  url,
}: LinkPreviewPanelProps) => {
  return (
    <Surface className="flex items-center gap-2 p-2">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="break-all text-sm underline"
      >
        {url}
      </a>
      <ToolbarDivider />
      <Tooltip title="Edit link">
        <ToolbarButton onClick={onEdit}>
          <Icon name="Pen" />
        </ToolbarButton>
      </Tooltip>
      <Tooltip title="Remove link">
        <ToolbarButton onClick={onClear}>
          <Icon name="Trash2" />
        </ToolbarButton>
      </Tooltip>
    </Surface>
  );
};
