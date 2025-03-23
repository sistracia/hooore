"use client";

import { cn } from "@hooore/utils";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";

export type TemplatePreviewProps = {
  title?: string;
  description?: string;
  children?: React.ReactNode;
  header?: React.ReactNode;
  action?: React.ReactNode;
  onBack?: () => void;
  className?: string;
};

export function TemplatePreview({
  children,
  description,
  title,
  onBack,
  header,
  action,
  className,
}: TemplatePreviewProps) {
  return (
    <div
      className={cn(
        "dd-flex dd-w-full dd-flex-col dd-bg-background",
        className
      )}
    >
      <nav className="dd-flex dd-flex-col dd-justify-between dd-gap-2 dd-border-b-2 dd-p-2 sm:dd-flex-row">
        <div className="dd-flex dd-flex-1 dd-items-center dd-gap-2">
          {onBack && (
            <Button type="button" size="icon" variant="ghost" onClick={onBack}>
              <ArrowLeftIcon className="dd-h-4 dd-w-4" />
            </Button>
          )}

          {(title || description) && (
            <div className="dd-grid">
              {title && (
                <span className="dd-text-xl dd-font-semibold">{title}</span>
              )}
              {description && (
                <span className="dd-text-sm dd-text-muted-foreground">
                  {description}
                </span>
              )}
            </div>
          )}
        </div>
        <div className="dd-flex dd-flex-1 dd-items-center dd-justify-center dd-gap-2">
          {header}
        </div>
        <div className="dd-flex dd-flex-1 dd-justify-end">{action}</div>
      </nav>
      <div className="dd-flex dd-h-full dd-w-full dd-flex-1 dd-overflow-hidden">
        {children}
      </div>
    </div>
  );
}
