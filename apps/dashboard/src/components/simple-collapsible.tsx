"use client";

import { cn } from "@repo/utils";
import { useState } from "react";

export type SimpleCollapsibleProps = {
  label?: React.ReactNode;
  children?: React.ReactNode;
  action?: React.ReactNode;
  initialCollapse?: boolean;
};

export function SimpleCollapsible({
  label,
  children,
  action,
  initialCollapse = false,
}: SimpleCollapsibleProps) {
  const [isCollapseState, setIsCollapseState] = useState<boolean | null>(null);

  const isCollapse =
    isCollapseState !== null ? isCollapseState : initialCollapse;

  return (
    <div className="dd-mb-4 dd-rounded-lg dd-border">
      <div
        role="button"
        onClick={() => {
          setIsCollapseState((isCollapseState) => {
            return !isCollapseState;
          });
        }}
        className={cn(
          "dd-gap dd-flex dd-items-center dd-p-2",
          !isCollapse && "dd-border-b",
        )}
      >
        <div className="dd-flex-1">{label}</div>
        <div>{action}</div>
      </div>
      {!isCollapse && <div className="dd-p-2">{children}</div>}
    </div>
  );
}
