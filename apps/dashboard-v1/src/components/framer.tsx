"use client";

import Frame, { type FrameContextProps, useFrame } from "react-frame-component";
import { useEffect } from "react";
import { cn } from "@repo/utils";

type FrameInnerProps = {
  onRender?: (frameContext: FrameContextProps) => void;
  children?: React.ReactNode;
  className?: string;
};

const FrameInner = ({ onRender, children }: FrameInnerProps) => {
  const frameContext = useFrame();

  useEffect(() => {
    onRender?.(frameContext);
  }, []);

  return children;
};

export type FramerProps = FrameInnerProps;

export function Framer({ children, onRender, className }: FramerProps) {
  return (
    <Frame
      className={cn("dd-h-full dd-w-full", className)}
      initialContent={`<!DOCTYPE html><html><head>${document.head.innerHTML.toString()}</head><body><div></div></body></html>`}
    >
      <FrameInner onRender={onRender}>{children}</FrameInner>
    </Frame>
  );
}
