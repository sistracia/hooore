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
        "flex w-full flex-col items-center justify-between bg-transparent",
        "sm:h-fit sm:flex-row sm:rounded-full sm:bg-white/25 sm:px-8 sm:py-4 sm:shadow-[0_0_4px_rgba(0,0,0,0.08)]",
        isOpen && "h-dvh",
        className,
      )}
    >
      <div
        className={cn(
          "z-10 flex w-full items-center justify-between p-4 sm:p-0",
          "sm:border-0 sm:bg-transparent",
          isOpen && "border-ink-cumi-50 border-b-2 bg-white",
        )}
      >
        {title}
        <Button
          variant="text"
          size="icon"
          onClick={toggleOpen}
          className="z-10 sm:hidden"
        >
          {isOpen ? (
            <Cross1Icon className="animate-in zoom-in h-4 w-4" />
          ) : (
            <HamburgerMenuIcon className="animate-in zoom-in h-4 w-4" />
          )}
        </Button>
      </div>
      <div
        className={cn(
          "flex h-full w-full flex-col bg-white px-1 py-2.5 sm:w-fit sm:bg-transparent sm:px-0 sm:py-0",
          isOpen
            ? "animate-in slide-in-from-top"
            : "-translate-y-[150%] transition-transform ease-linear sm:translate-y-0 sm:transition-none",
        )}
      >
        <div className="flex flex-[2_2_0%] flex-col sm:flex-row sm:gap-4">
          {navlist}
        </div>
        {extra && (
          <div className="flex flex-1 flex-col justify-end sm:hidden">
            {extra}
          </div>
        )}
      </div>
    </nav>
  );
}
