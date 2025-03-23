"use client";

import { cn } from "@hooore/utils";
import { useEffect, useRef } from "react";

export type ScalerProps = {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  centered?: boolean;
};

export function Scaler({ children, className, style, centered }: ScalerProps) {
  const outerContainerRef = useRef<HTMLDivElement>(null);
  const innerContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const outerContainer = outerContainerRef.current;
    const innerContainer = innerContainerRef.current;
    if (!outerContainer || !innerContainer) {
      return;
    }

    const scale = outerContainer.clientWidth / innerContainer.clientWidth;
    innerContainer.style.transform =
      "scale(" + scale + ")" + (centered ? "translateY(-50%)" : "");
  }, [centered]);

  return (
    <div ref={outerContainerRef} className="dd-relative dd-w-[100%]">
      <div
        ref={innerContainerRef}
        style={style}
        className={cn(
          "dd-absolute dd-left-0 dd-origin-top-left",
          centered ? "dd-top-2/4" : "dd-top-0",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
}
