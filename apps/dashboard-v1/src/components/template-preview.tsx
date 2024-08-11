"use client";

import { ArrowLeftIcon, DesktopIcon, MobileIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";
import { cn } from "@repo/utils";
import { useState } from "react";
import dynamic from "next/dynamic";
import { Scaler } from "./scaler";
import type { PageContent } from "@/actions/page.definition";
import { PageRenderer } from "./page-renderer";
import { FrameContextProps } from "react-frame-component";
import { ScrollArea } from "./ui/scroll-area";

const Framer = dynamic(
  async () => {
    const { Framer } = await import("@/components/framer");
    return Framer;
  },
  { ssr: false },
);

export type TemplatePreviewProps = {
  title?: string;
  description?: string;
  onBack?: () => void;
  actionButton?: React.ReactNode;
  pageContents: PageContent[];
  children?: React.ReactNode;
  activeContent?: PageContent | null;
  setActiveContent?: (pageContent: PageContent) => void;
  onPreviewClick?: () => void;
};

export function TemplatePreview({
  title,
  description,
  onBack,
  actionButton,
  pageContents,
  children,
  activeContent = null,
  setActiveContent: setActiveContentProps,
  onPreviewClick,
}: TemplatePreviewProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [frameContext, setFrameContext] = useState<FrameContextProps | null>(
    null,
  );

  const pageRendered = (
    <PageRenderer
      contents={pageContents}
      disableLink={true}
      disableAnimation={true}
    />
  );

  const setActiveContent = (content: PageContent) => {
    setActiveContentProps?.(content);

    if (isMobile) {
      frameContext?.document
        ?.getElementById(content.id)
        ?.scrollIntoView({ block: "start", inline: "center" });
    } else {
      document
        .getElementById(content.id)
        ?.scrollIntoView({ block: "center", inline: "center" });
    }
  };

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
        <div className="dd-flex dd-flex-1 dd-items-center dd-justify-center dd-gap-2">
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
          <Button type="button" variant="outline" onClick={onPreviewClick}>
            Preview
          </Button>
        </div>
        {(actionButton || onBack || title) && (
          <div className="dd-flex dd-flex-1 dd-justify-end">{actionButton}</div>
        )}
      </nav>
      <div className="dd-flex dd-h-full dd-w-full dd-flex-1 dd-overflow-hidden">
        <aside className="dd-w-full dd-max-w-[180px] dd-overflow-y-scroll dd-border-r-2 dd-p-4">
          <PageRenderer
            contents={pageContents}
            disableLink={true}
            sidePreview={true}
            disableAnimation={true}
            onPreviewClick={setActiveContent}
          />
        </aside>
        <div className="dd-h-full dd-w-full dd-p-4">
          <div
            className={cn(
              "dd-mx-auto dd-h-full",
              isMobile ? "dd-w-[360px]" : "dd-w-[860px]",
            )}
          >
            <Framer
              className={cn(isMobile ? "dd-block" : "dd-hidden")}
              onRender={setFrameContext}
            >
              {pageRendered}
            </Framer>
            <ScrollArea
              className={cn("dd-h-full", !isMobile ? "dd-block" : "dd-hidden")}
            >
              <Scaler className="dd-w-[1440px]">{pageRendered}</Scaler>
            </ScrollArea>
          </div>
        </div>
        {activeContent && (
          <div className="dd-flex dd-w-full dd-max-w-[420px] dd-flex-col dd-border-l-2">
            <div className="dd-bg-slate-100 dd-p-6">
              <span className="dd-block dd-text-muted-foreground">
                Format Option
              </span>
              <span className="dd-block dd-text-3xl dd-font-semibold">
                {activeContent.content_name}
              </span>
            </div>
            <div className="dd-overflow-y-scroll dd-p-6">{children}</div>
          </div>
        )}
      </div>
    </div>
  );
}
