"use client";

import { cn } from "@repo/utils";
import { useEffect, useRef } from "react";

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
  const spotlightIdentifier = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const spotlightElement = spotlightIdentifier.current;
    if (!spotlightElement) {
      return;
    }

    const calculateGrids = (width: number, containerBonds: DOMRect) => {
      type Coord = { x: number; y: number };
      let grids: {
        tl: Coord;
        tr: Coord;
        br: Coord;
        bl: Coord;
      }[][] = [];

      const columnsCount = Math.floor(containerBonds.width / width);
      const rowsCount = Math.floor(containerBonds.height / width);

      const evenWidth = containerBonds.width / columnsCount;
      const evenHeight = containerBonds.height / rowsCount;

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

      return { grids, evenHeight, evenWidth };
    };

    const calculatedGrids = calculateGrids(
      width,
      spotlightElement.getBoundingClientRect(),
    );

    let grids = calculatedGrids.grids;
    let evenHeight = calculatedGrids.evenHeight;
    let evenWidth = calculatedGrids.evenWidth;

    const onWindowResize = () => {
      const calculatedGrids = calculateGrids(
        width,
        spotlightElement.getBoundingClientRect(),
      );

      grids = calculatedGrids.grids;
      evenHeight = calculatedGrids.evenHeight;
      evenWidth = calculatedGrids.evenWidth;
    };

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

        spotlightElement.style.setProperty("--xtl", `${xtl}px`);
        spotlightElement.style.setProperty("--ytl", `${ytl}px`);
        spotlightElement.style.setProperty("--xtr", `${xtr}px`);
        spotlightElement.style.setProperty("--ytr", `${ytr}px`);
        spotlightElement.style.setProperty("--xbr", `${xbr}px`);
        spotlightElement.style.setProperty("--ybr", `${ybr}px`);
        spotlightElement.style.setProperty("--xbl", `${xbl}px`);
        spotlightElement.style.setProperty("--ybl", `${ybl}px`);
      });
    };

    document.body.addEventListener("pointermove", onPointerMove);
    window.addEventListener("resize", onWindowResize);
    return () => {
      document.body.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("resize", onWindowResize);
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
        ref={spotlightIdentifier}
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
