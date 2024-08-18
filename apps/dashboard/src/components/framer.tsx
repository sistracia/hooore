"use client";

import Frame, { type FrameContextProps, useFrame } from "react-frame-component";
import { useEffect } from "react";
import { cn } from "@repo/utils";

type FrameInnerProps = {
  onRendered?: (frameContext: FrameContextProps) => void;
  children?: React.ReactNode;
  className?: string;
};

const FrameInner = ({ onRendered, children }: FrameInnerProps) => {
  const frameContext = useFrame();

  useEffect(() => {
    onRendered?.(frameContext);
  }, []);

  return children;
};

export type FramerProps = FrameInnerProps;

export function Framer({ children, onRendered, className }: FramerProps) {
  return (
    <Frame
      className={cn("dd-h-full dd-w-full", className)}
      initialContent={`<!DOCTYPE html><html><head>${document.head.innerHTML.toString()}</head><body><div></div></body></html>`}
    >
      <FrameInner onRendered={onRendered}>{children}</FrameInner>
    </Frame>
  );
}
