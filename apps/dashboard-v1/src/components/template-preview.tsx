"use client";

import { ArrowLeftIcon, DesktopIcon, MobileIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";
import { cn } from "@repo/utils";
import { useEffect, useState } from "react";
import Frame, { type FrameContextProps, useFrame } from "react-frame-component";
import { Scaler } from "./scaler";

type FrameInnerProps = {
  onRender?: (frameContext: FrameContextProps) => void;
  children?: React.ReactNode;
};

const FrameInner = ({ onRender, children }: FrameInnerProps) => {
  const frameContext = useFrame();

  useEffect(() => {
    onRender?.(frameContext);
  }, []);

  return children;
};

export type TemplatePreviewProps = {
  title?: string;
  description?: string;
  onBack?: () => void;
  actionButton?: React.ReactNode;
  aside?: React.ReactNode;
  children?: React.ReactNode;
};

export function TemplatePreview({
  title,
  description,
  onBack,
  actionButton,
  children,
  aside,
}: TemplatePreviewProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [_, setFrameContext] = useState<FrameContextProps | null>(null);

  return (
    <div className="dd-flex dd-h-dvh dd-w-full dd-flex-col dd-bg-background">
      <nav className="dd-flex dd-flex-col dd-justify-between dd-gap-2 dd-border-b-2 dd-p-2 sm:dd-flex-row">
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
        {(actionButton || onBack || title) && (
          <div className="dd-flex dd-flex-1 dd-justify-end">{actionButton}</div>
        )}
      </nav>
      <div className="dd-flex dd-h-full dd-w-full dd-flex-1 dd-overflow-hidden">
        {aside && (
          <aside className="dd-w-full dd-max-w-[180px] dd-overflow-y-scroll dd-border-r-2 dd-p-4">
            {aside}
          </aside>
        )}
        {children && (
          <div
            className={cn(
              "dd-mx-auto dd-h-full",
              isMobile ? "dd-w-[360px]" : "dd-w-[1000px]",
            )}
          >
            <Scaler
              className={cn(
                "dd-h-full dd-overflow-y-scroll",
                isMobile ? "dd-w-full" : "dd-w-[1440px]",
              )}
              scaleHeight={false}
              scaleWidth={!isMobile}
            >
              <Frame
                // style={{ height: frameContext?.document?.body.scrollHeight }}
                className="dd-w-full"
                initialContent={`<!DOCTYPE html><html><head>${document.head.innerHTML.toString()}</head><body><div></div></body></html>`}
              >
                <FrameInner onRender={setFrameContext}>{children}</FrameInner>
              </Frame>
            </Scaler>
          </div>
        )}
      </div>
    </div>
  );
}
