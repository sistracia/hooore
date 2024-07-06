"use client";

import { cn } from "@repo/utils";
import { useEffect, useRef } from "react";

export type SpotlightProps = {
  children?: React.ReactNode;
  gradientColor?: string;
  className?: string;
};

export function Spotlight({
  children,
  gradientColor,
  className,
}: SpotlightProps) {
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const spotlight = spotlightRef.current;
    if (!spotlight) {
      return;
    }

    const onPointerMove = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") {
        return;
      }

      requestAnimationFrame(() => {
        const bounds = spotlight.getBoundingClientRect();

        const x = event.clientX - bounds.left;
        const y = event.clientY - bounds.top;

        spotlight.style.setProperty("--x", `${x}px`);
        spotlight.style.setProperty("--y", `${y}px`);
      });
    };

    document.body.addEventListener("pointermove", onPointerMove);
    return () => {
      document.body.removeEventListener("pointermove", onPointerMove);
    };
  }, []);

  return (
    <div className={cn("ss-relative ss-h-full ss-w-full", className)}>
      {children}
      <div
        ref={spotlightRef}
        style={
          {
            "--x": "-10000px",
            "--y": "-10000px",
            backgroundImage: `radial-gradient(circle at var(--x) var(--y), transparent 20%, ${gradientColor} 30%)`,
          } as React.CSSProperties
        }
        className="ss-absolute ss-left-0 ss-top-0 ss-h-full ss-w-full ss-mix-blend-color"
      ></div>
    </div>
  );
}
