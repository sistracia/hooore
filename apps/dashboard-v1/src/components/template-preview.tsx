"use client";

import { ArrowLeftIcon, DesktopIcon, MobileIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";
import { cn } from "@repo/utils";
import { useState } from "react";

export type TemplatePreviewProps = {
  title?: string;
  onBack?: () => void;
  actionButton?: React.ReactNode;
};

export function TemplatePreview({
  title,
  onBack,
  actionButton,
}: TemplatePreviewProps) {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <div className="dd-h-full dd-w-full dd-bg-background">
      <div className="dd-flex dd-flex-col dd-justify-between dd-gap-2 dd-border-b-2 dd-p-2 sm:dd-flex-row">
        {(onBack || title) && (
          <div className="dd-flex dd-flex-1 dd-items-center dd-gap-2">
            {onBack && (
              <Button
                type="button"
                size="icon"
                variant="ghost"
                onClick={onBack}
              >
                <ArrowLeftIcon className="dd-h-4 dd-w-4" />
              </Button>
            )}
            {title && (
              <span className="dd-text-xl dd-font-semibold">{title}</span>
            )}
          </div>
        )}
        <div className="dd-flex dd-flex-1 dd-justify-center dd-gap-2">
          <Button
            className={cn(!isMobile && "dd-brightness-95")}
            type="button"
            size="icon"
            variant="outline"
            onClick={() => {
              setIsMobile(false);
            }}
          >
            <DesktopIcon className="dd-h-4 dd-w-4" />
          </Button>
          <Button
            className={cn(isMobile && "dd-brightness-95")}
            type="button"
            size="icon"
            variant="outline"
            onClick={() => {
              setIsMobile(true);
            }}
          >
            <MobileIcon className="dd-h-4 dd-w-4" />
          </Button>
        </div>
        <div className="dd-flex dd-flex-1 dd-justify-end">{actionButton}</div>
      </div>
      <iframe
        title={`${title} Frame`}
        className={cn(
          "dd-mx-auto dd-h-full",
          isMobile ? "dd-w-[360px]" : "dd-w-full",
        )}
        src="https://hooore.com"
      ></iframe>
    </div>
  );
}
