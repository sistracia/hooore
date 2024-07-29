import { cn } from "@repo/utils";
import { Card } from "./card";

export type DashboardPageHeaderProps = {
  title?: string;
  description?: string;
  action?: React.ReactNode;
  className?: string;
};

export function DashboardPageHeader({
  title,
  description,
  action,
  className,
}: DashboardPageHeaderProps) {
  return (
    <Card
      as="header"
      className={cn(
        "dd-flex dd-items-center dd-rounded-lg dd-bg-background dd-p-6",
        className,
      )}
    >
      {(title || description) && (
        <div>
          {title && <h1 className="dd-text-2xl dd-font-semibold">{title}</h1>}
          {description && (
            <p className="dd-font-medium dd-text-muted-foreground">
              {description}
            </p>
          )}
        </div>
      )}
      {action && <div className="dd-ml-auto">{action}</div>}
    </Card>
  );
}
