"use client";

import { cn } from "@hooore/utils";
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
  const [isCollapseState, setIsCollapseState] = useState<boolean | null>(
    initialCollapse
  );

  const toggleCollapse = () => {
    setIsCollapseState((isCollapseState) => {
      return !isCollapseState;
    });
  };

  return (
    <div className="dd-mb-4 dd-rounded-lg dd-border">
      <div
        role="button"
        tabIndex={0}
        onClick={toggleCollapse}
        onKeyDown={toggleCollapse}
        className={cn(
          "dd-gap dd-flex dd-items-center dd-p-2",
          !isCollapseState && "dd-border-b"
        )}
      >
        <div className="dd-flex-1 dd-overflow-x-scroll dd-text-ellipsis">
          {label}
        </div>
        <div className="dd-flex">{action}</div>
      </div>
      {!isCollapseState && (
        <div className="dd-flex dd-flex-col dd-gap-4 dd-p-2">{children}</div>
      )}
    </div>
  );
}
