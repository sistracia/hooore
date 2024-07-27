"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import { cn } from "@repo/utils";

export type SetupLayoutProps = {
  title: string;
  badge?: string;
  children: React.ReactNode;
  nextButtonText?: string;
  nextButtonDisabled?: boolean;
  nextButtonType?: HTMLButtonElement["type"];
  className?: string;
  stickyHeader?: boolean;
  onNext?: () => void;
  onBack?: () => void;
};

export function SetupLayout({
  title,
  badge,
  children,
  nextButtonText,
  nextButtonDisabled,
  nextButtonType,
  className,
  onNext,
  onBack,
  stickyHeader,
}: SetupLayoutProps) {
  return (
    <div className={cn("dd-w-full", className)}>
      {(badge || title) && (
        <div
          className={cn(
            "dd-mb-2 dd-bg-background dd-px-4 dd-pt-4",
            stickyHeader && "dd-sticky -dd-top-1 dd-z-10",
          )}
        >
          {badge && (
            <div className="dd-mb-12">
              <Badge variant="outline">{badge}</Badge>
            </div>
          )}
          {title && (
            <h1 className="dd-pb-2 dd-text-3xl dd-font-semibold">{title}</h1>
          )}
        </div>
      )}
      {children && <div className="dd-px-4">{children}</div>}
      {(onBack || onNext) && (
        <div className="dd-mt-8 dd-flex dd-p-4">
          {onBack && (
            <Button
              type="button"
              variant="outline"
              size="icon"
              className="dd-mr-2"
              onClick={onBack}
            >
              <ArrowLeftIcon className="h-4 w-4" />
            </Button>
          )}
          {onNext && (
            <Button
              type={nextButtonType}
              onClick={onNext}
              disabled={nextButtonDisabled}
            >
              {nextButtonText}
            </Button>
          )}
        </div>
      )}
    </div>
  );
}
