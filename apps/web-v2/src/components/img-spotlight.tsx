"use client";

import { cn } from "@repo/utils";
import { useEffect, useId, useRef } from "react";

export type ImgSpotlightProps = {
  src: string;
  alt?: string;
  spotlightAlt?: string;
  width?: number;
  className?: string;
};

export function ImgSpotlight({
  src,
  alt,
  spotlightAlt,
  width = 100,
  className,
}: ImgSpotlightProps) {
  const spotlightIdentifier = useId();
  const spotlightImgFocusRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const spotlightImgFocus = spotlightImgFocusRef.current;
    if (!spotlightImgFocus) {
      return;
    }

    const spotlightElement = document.getElementById(spotlightIdentifier);
    if (!spotlightElement) {
      return;
    }

    type Coord = { x: number; y: number };
    let grids: {
      tl: Coord;
      tr: Coord;
      br: Coord;
      bl: Coord;
    }[][] = [];

    const spotlightBounds = spotlightElement.getBoundingClientRect();

    const columnsCount = Math.floor(spotlightBounds.width / width);
    const rowsCount = Math.floor(spotlightBounds.height / width);

    const evenWidth = spotlightBounds.width / columnsCount;
    const evenHeight = spotlightBounds.height / rowsCount;

    grids = Array(rowsCount + 1)
      .fill(0)
      .map((_, heightIndex) => {
        return Array(columnsCount + 1)
          .fill(0)
          .map((__, widthIndex) => {
            return {
              tl: {
                x: widthIndex * evenWidth,
                y: heightIndex * evenHeight,
              },
              tr: {
                x: (widthIndex + 1) * evenWidth,
                y: heightIndex * evenHeight,
              },
              br: {
                x: (widthIndex + 1) * evenWidth,
                y: (heightIndex + 1) * evenHeight,
              },
              bl: {
                x: widthIndex * evenWidth,
                y: (heightIndex + 1) * evenHeight,
              },
            };
          });
      });

    const onPointerMove = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") {
        return;
      }

      requestAnimationFrame(() => {
        const bounds = spotlightElement.getBoundingClientRect();

        const xIndex = Math.floor((event.clientX - bounds.left) / evenWidth);
        const yIndex = Math.floor((event.clientY - bounds.top) / evenHeight);
        const polygonPoint = grids[yIndex]?.[xIndex];

        const isInBoundary =
          event.clientX >= bounds.left &&
          event.clientX <= bounds.right &&
          event.clientY >= bounds.top &&
          event.clientY <= bounds.bottom;

        const randomPoint = -10000;

        const xtl =
          !isInBoundary || !polygonPoint ? randomPoint : polygonPoint.tl.x;
        const ytl =
          !isInBoundary || !polygonPoint ? randomPoint : polygonPoint.tl.y;
        const xtr =
          !isInBoundary || !polygonPoint ? randomPoint : polygonPoint.tr.x;
        const ytr =
          !isInBoundary || !polygonPoint ? randomPoint : polygonPoint.tr.y;
        const xbr =
          !isInBoundary || !polygonPoint ? randomPoint : polygonPoint.br.x;
        const ybr =
          !isInBoundary || !polygonPoint ? randomPoint : polygonPoint.br.y;
        const xbl =
          !isInBoundary || !polygonPoint ? randomPoint : polygonPoint.bl.x;
        const ybl =
          !isInBoundary || !polygonPoint ? randomPoint : polygonPoint.bl.y;

        spotlightImgFocus.style.setProperty("--xtl", `${xtl}px`);
        spotlightImgFocus.style.setProperty("--ytl", `${ytl}px`);
        spotlightImgFocus.style.setProperty("--xtr", `${xtr}px`);
        spotlightImgFocus.style.setProperty("--ytr", `${ytr}px`);
        spotlightImgFocus.style.setProperty("--xbr", `${xbr}px`);
        spotlightImgFocus.style.setProperty("--ybr", `${ybr}px`);
        spotlightImgFocus.style.setProperty("--xbl", `${xbl}px`);
        spotlightImgFocus.style.setProperty("--ybl", `${ybl}px`);
      });
    };

    document.body.addEventListener("pointermove", onPointerMove);
    return () => {
      document.body.removeEventListener("pointermove", onPointerMove);
    };
  }, [width]);

  return (
    <div className="ss-relative ss-h-full ss-w-full">
      <img
        src={src}
        className={cn(className, "ss-mix-blend-luminosity")}
        alt={alt}
      />
      <img
        id={spotlightIdentifier}
        ref={spotlightImgFocusRef}
        style={
          {
            "--xtl": "-10000px",
            "--ytl": "-10000px",
            "--xtr": "-10000px",
            "--ytr": "-10000px",
            "--xbr": "-10000px",
            "--ybr": "-10000px",
            "--xbl": "-10000px",
            "--ybl": "-10000px",
            clipPath:
              "polygon(var(--xtl) var(--ytl), var(--xtr) var(--ytr), var(--xbr) var(--ybr), var(--xbl) var(--ybl))",
            opacity: "100%",
            filter: "brightness(100%)",
          } as React.CSSProperties
        }
        className={cn("ss-absolute ss-left-0 ss-top-0", className)}
        src={src}
        alt={spotlightAlt}
      />
    </div>
  );
}
