"use client";

import { cn } from "@repo/utils";
import { Children, useEffect, useRef } from "react";

export type MarqueeProps = {
  className?: string;
  children?: React.ReactNode;
};

/**
 * Ref: https://github.com/HoanghoDev/youtube_v2/blob/main/auto_slider/index.html
 */
export function Marquee({ children, className }: MarqueeProps) {
  const list1Ref = useRef<HTMLUListElement>(null);
  const list2Ref = useRef<HTMLUListElement>(null);
  const elementsCount = Children.count(children);

  useEffect(() => {
    const list1 = list1Ref.current;
    const list2 = list2Ref.current;

    if (!list1 || !list2) {
      return;
    }

    let isDone1Lap = false;
    let maxLimit = 0;
    let limit = 0;
    let list1Start: number | undefined,
      list2Start: number | undefined,
      previousTimeStamp: number | undefined;

    const list1Children = list1.children;
    for (
      let childrenIndex = 0;
      childrenIndex < list1Children.length;
      childrenIndex++
    ) {
      const children = list1Children.item(childrenIndex);
      if (!children) {
        continue;
      }

      maxLimit +=
        children.getBoundingClientRect().width +
        parseInt(window.getComputedStyle(children).marginRight);
    }

    let animationFrameId: number;

    const step = (timeStamp: number) => {
      if (list1Start === undefined || list2Start === undefined) {
        list1Start = timeStamp;
        list2Start = timeStamp;
      }

      if (previousTimeStamp !== timeStamp) {
        const list1Elapsed = timeStamp - list1Start;
        const list1XPoint = 0.1 * list1Elapsed;
        list1.style.transform = `translateX(${limit - list1XPoint}px)`;

        const list2Elapsed = timeStamp - list2Start;
        const list2XPoint = 0.1 * list2Elapsed;
        list2.style.transform = `translateX(${maxLimit - list2XPoint}px)`;

        if (
          (!isDone1Lap && list1XPoint >= maxLimit) ||
          (isDone1Lap && list1XPoint >= 2 * maxLimit)
        ) {
          isDone1Lap = true;
          limit = maxLimit;
          list1Start = timeStamp;
        }

        if (
          (!isDone1Lap && list2XPoint >= maxLimit) ||
          (isDone1Lap && list2XPoint >= 2 * maxLimit)
        ) {
          list2Start = timeStamp;
        }
      }

      previousTimeStamp = timeStamp;
      animationFrameId = window.requestAnimationFrame(step);
    };

    animationFrameId = window.requestAnimationFrame(step);

    const onVisibilityChange = () => {
      list1Start = undefined;
      list2Start = undefined;
      previousTimeStamp = undefined;
      isDone1Lap = false;
      limit = 0;
    };

    document.addEventListener("visibilitychange", onVisibilityChange);
    return () => {
      cancelAnimationFrame(animationFrameId);
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, [elementsCount]);

  return (
    <div
      className={cn(
        "ss-relative ss-h-full ss-w-full ss-overflow-hidden",
        className,
      )}
    >
      <ul
        ref={list1Ref}
        className="ss-absolute ss-flex ss-h-full ss-w-max ss-min-w-full ss-items-center ss-overflow-hidden"
      >
        {Children.map(children, (child, childIndex) => {
          return (
            <li
              key={childIndex}
              className="ss-mr-10 ss-flex ss-h-full ss-flex-1 ss-items-center ss-justify-center"
            >
              {child}
            </li>
          );
        })}
      </ul>
      <ul
        ref={list2Ref}
        className="ss-absolute ss-flex ss-h-full ss-w-max ss-min-w-full ss-items-center ss-overflow-hidden"
      >
        {Children.map(children, (child, childIndex) => {
          return (
            <li
              key={childIndex}
              className="ss-mr-10 ss-flex ss-h-full ss-flex-1 ss-items-center ss-justify-center"
            >
              {child}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
