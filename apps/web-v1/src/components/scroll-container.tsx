"use client";

import { PageScroll } from "@repo/smooth-scroll/react/page-scroll";

export type ScrollContainerProps = {
  children?: React.ReactNode;
};
export function ScrollContainer({ children }: ScrollContainerProps) {
  return <PageScroll options={{ infinite: false }}>{children}</PageScroll>;
}
