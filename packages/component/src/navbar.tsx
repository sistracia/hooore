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
        "flex w-full flex-col items-center bg-transparent",
        "sm:flex-row sm:justify-between sm:rounded-full sm:bg-white/25 sm:px-8 sm:py-4 sm:shadow-[0_0_4px_rgba(0,0,0,0.08)]",
        className,
      )}
    >
      <div
        className={cn(
          "z-10 flex h-[15vh] w-full items-center justify-between border-b-2 border-transparent p-4",
          "sm:h-fit sm:border-0 sm:bg-transparent sm:p-0",
          isOpen && "border-ink-cumi-50 bg-white",
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
          "flex w-full flex-col bg-white px-1 transition-all ease-linear sm:h-full sm:w-fit sm:overflow-visible sm:bg-transparent sm:px-0 sm:py-0 sm:transition-none",
          isOpen ? "h-[85vh] py-2.5" : "h-0 overflow-hidden py-0",
        )}
      >
        <div className="flex flex-[2_2_0%] flex-col gap-2 sm:flex-row sm:gap-4">
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
