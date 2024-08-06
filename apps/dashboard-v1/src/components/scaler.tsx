"use client";

import { cn } from "@repo/utils";
import { useEffect, useRef } from "react";

export type ScalerProps = {
  className?: string;
  children?: React.ReactNode;
  scaleWidth?: boolean;
  scaleHeight?: boolean;
};

export function Scaler({
  className,
  children,
  scaleHeight = true,
  scaleWidth = true,
}: ScalerProps) {
  const outerContainerRef = useRef<HTMLDivElement>(null);
  const innerContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const outerContainer = outerContainerRef.current;
    const innerContainer = innerContainerRef.current;
    if (!outerContainer || !innerContainer) {
      return;
    }

    let scale = 1;
    if (scaleHeight && scaleWidth) {
      scale = Math.min(
        outerContainer.clientWidth / innerContainer.clientWidth,
        outerContainer.clientHeight / innerContainer.clientHeight,
      );
    } else if (scaleHeight) {
      scale = outerContainer.clientHeight / innerContainer.clientHeight;
    } else {
      scale = outerContainer.clientWidth / innerContainer.clientWidth;
    }

    innerContainer.style.transform = "scale(" + scale + ")";
  }, [scaleHeight, scaleWidth]);

  return (
    <div ref={outerContainerRef} className="dd-h-full dd-w-full">
      <div
        ref={innerContainerRef}
        className={cn("dd-tra dd-relative dd-origin-top-left", className)}
      >
        {children}
      </div>
    </div>
  );
}
