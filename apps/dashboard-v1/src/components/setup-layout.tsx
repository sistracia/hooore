"use client";

import { Badge } from "@/components/badge";
import { Button } from "@/components/button";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import { cn } from "@repo/utils";

export type SetupLayoutProps = {
  title: string;
  badge: string;
  children: React.ReactNode;
  nextButtonText: string;
  nextButtonDisabled?: boolean;
  nextButtonType?: HTMLButtonElement["type"];
  className?: string;
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
}: SetupLayoutProps) {
  return (
    <div className={cn("dd-w-full sm:dd-w-[540px]", className)}>
      <div className="dd-mb-12">
        <Badge variant="outline">{badge}</Badge>
      </div>
      <div className="dd-mb-12">
        <h1 className="dd-mb-4 dd-text-3xl dd-font-semibold">{title}</h1>
        {children}
      </div>
      <div className="dd-flex">
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
    </div>
  );
}
