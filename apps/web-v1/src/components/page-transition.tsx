"use client";

import gsap from "gsap";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { cn } from "@repo/utils";

export type PageTransitionProps = {
  className?: string;
  children?: React.ReactNode;
};

export const PageTransition = ({
  className,
  children,
}: PageTransitionProps) => {
  const curtainRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [pageLoaded, setPageloaded] = useState(false);
  const timeline = useRef(gsap.timeline());

  useEffect(() => {
    setPageloaded(true);
  }, [pathname, searchParams]);

  useEffect(() => {
    if (!pageLoaded) {
      return;
    }
    timeline.current.to(curtainRef.current, {
      y: "-100%",
      paused: !pageLoaded,
      duration: 0.7,
      delay: 1,
      startAt: { y: 0 },
      onComplete: () => {
        setPageloaded(false);
      },
      ease: "circ.out",
    });
  }, [pageLoaded]);

  return (
    <div
      className={cn(
        "fixed left-0 top-0 z-[10000] flex h-screen w-full",
        className,
      )}
      ref={curtainRef}
    >
      {children}
    </div>
  );
};
