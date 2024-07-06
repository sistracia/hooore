"use client";

import { cn } from "@repo/utils";
import { useEffect, useRef } from "react";

export type ImgSpotlightProps = {
  src: string;
  alt?: string;
  spotlightAlt?: string;
  gradientColor?: string;
  className?: string;
};

export function ImgSpotlight({
  src,
  alt,
  spotlightAlt,
  gradientColor,
  className,
}: ImgSpotlightProps) {
  const spotlightImgFocusRef = useRef<HTMLImageElement>(null);
  const spotlightMaskRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const spotlightImgFocus = spotlightImgFocusRef.current;
    const spotlightMask = spotlightMaskRef.current;
    if (!spotlightImgFocus || !spotlightMask) {
      return;
    }

    const onPointerMove = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") {
        return;
      }

      requestAnimationFrame(() => {
        const bounds = spotlightImgFocus.getBoundingClientRect();

        const x = event.clientX - bounds.left;
        const y = event.clientY - bounds.top;

        spotlightImgFocus.style.setProperty("--x", `${x}px`);
        spotlightImgFocus.style.setProperty("--y", `${y}px`);
        spotlightMask.style.setProperty("--x", `${x}px`);
        spotlightMask.style.setProperty("--y", `${y}px`);
      });
    };

    document.body.addEventListener("pointermove", onPointerMove);
    return () => {
      document.body.removeEventListener("pointermove", onPointerMove);
    };
  }, []);

  return (
    <div
      style={{ "--circle-radius": "200px" } as React.CSSProperties}
      className="ss-relative ss-h-full ss-w-full"
    >
      <img src={src} className={className} alt={alt} />
      <img
        ref={spotlightImgFocusRef}
        style={
          {
            "--x": "-10000px",
            "--y": "-10000px",
            clipPath: "circle(var(--circle-radius) at var(--x) var(--y))",
            opacity: "100%",
            filter: "brightness(100%)",
          } as React.CSSProperties
        }
        className={cn("ss-absolute ss-left-0 ss-top-0", className)}
        src={src}
        alt={spotlightAlt}
      />
      <div
        ref={spotlightMaskRef}
        style={
          {
            "--x": "-10000px",
            "--y": "-10000px",
            backgroundImage: `radial-gradient(circle at var(--x) var(--y), transparent var(--circle-radius), ${gradientColor} 30%)`,
          } as React.CSSProperties
        }
        className="ss-absolute ss-left-0 ss-top-0 ss-h-full ss-w-full ss-mix-blend-color"
      ></div>
    </div>
  );
}
