"use client";

import { Cross1Icon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Button } from "./button";
import { cn } from "@repo/utils";

export type NavBarProps = {
  title?: React.ReactNode;
  navlist?: React.ReactNode;
  extra?: React.ReactNode;
  className?: string;
  isOpen?: boolean;
  toggleOpen?: () => void;
};

export function NavBar({
  title,
  navlist,
  extra,
  className,
  isOpen,
  toggleOpen,
}: NavBarProps) {
  return (
    <nav
      className={cn(
        "comp-flex comp-w-full comp-flex-col comp-items-center comp-bg-transparent",
        "sm:comp-flex-row sm:comp-justify-between sm:comp-rounded-full sm:comp-bg-white/25 sm:comp-px-8 sm:comp-py-4 sm:comp-shadow-[0_0_4px_rgba(0,0,0,0.08)]",
        className,
      )}
    >
      <div
        className={cn(
          "comp-z-10 comp-flex comp-h-[15vh] comp-w-full comp-items-center comp-justify-between comp-border-b-2 comp-p-4",
          "sm:comp-h-fit sm:comp-border-0 sm:comp-bg-transparent sm:comp-p-0",
          isOpen
            ? "comp-border-ink-cumi-50 comp-bg-white"
            : "comp-border-transparent",
        )}
      >
        {title}
        <Button
          variant="text"
          size="icon"
          onClick={toggleOpen}
          className="z-10 sm:comp-hidden"
        >
          {isOpen ? (
            <Cross1Icon className="comp-h-4 comp-w-4 comp-animate-in comp-zoom-in" />
          ) : (
            <HamburgerMenuIcon className="comp-h-4 comp-w-4 comp-animate-in comp-zoom-in" />
          )}
        </Button>
      </div>
      <div
        className={cn(
          "comp-flex comp-w-full comp-flex-col comp-bg-white comp-px-1 comp-transition-all comp-ease-linear sm:comp-h-full sm:comp-w-fit sm:comp-overflow-visible sm:comp-bg-transparent sm:comp-px-0 sm:comp-py-0 sm:comp-transition-none",
          isOpen
            ? "comp-h-[85vh] comp-py-2.5"
            : "comp-h-0 comp-overflow-hidden comp-py-0",
        )}
      >
        <div className="comp-flex comp-flex-[2_2_0%] comp-flex-col comp-gap-2 sm:comp-flex-row sm:comp-gap-4">
          {navlist}
        </div>
        {extra && (
          <div className="comp-flex comp-flex-1 comp-flex-col comp-justify-end sm:comp-hidden">
            {extra}
          </div>
        )}
      </div>
    </nav>
  );
}
