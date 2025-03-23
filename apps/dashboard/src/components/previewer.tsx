"use client";

import { cn } from "@hooore/utils";
import { Framer, type FramerProps } from "./framer";
import { Scaler } from "./scaler";
import { ScrollArea } from "./ui/scroll-area";

export type PreviewerProps = {
  isMobile?: boolean;
  children?: React.ReactNode;
  onFrameRendered?: FramerProps["onRendered"];
  scrollable?: boolean;
};

export function Previewer({
  isMobile,
  children,
  onFrameRendered,
  scrollable = true,
}: PreviewerProps) {
  const childrenRendered = (
    <Scaler className="dd-w-[1440px]">{children}</Scaler>
  );
  return (
    <div
      className={cn(
        "dd-mx-auto dd-h-full",
        isMobile ? "dd-w-[360px]" : "dd-w-full"
      )}
    >
      <Framer
        className={cn(isMobile ? "dd-block" : "dd-hidden")}
        onRendered={onFrameRendered}
      >
        {children}
      </Framer>
      {scrollable ? (
        <ScrollArea
          className={cn("dd-h-full", !isMobile ? "dd-block" : "dd-hidden")}
        >
          {childrenRendered}
        </ScrollArea>
      ) : (
        childrenRendered
      )}
    </div>
  );
}
