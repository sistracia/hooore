"use client";

import { Cross1Icon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Button } from "./button";
import { cn } from "@repo/utils";
import { HoooreLogo } from "./hooore-logo";

export type NavbarProps = {
  isOpen: boolean;
  toggleOpen: () => void;
  socialMedia: React.ReactNode;
  children?: React.ReactNode;
};

export function Navbar({
  isOpen,
  toggleOpen,
  socialMedia,
  children,
}: NavbarProps) {
  return (
    <nav className="pc-fixed pc-top-0 pc-z-50 pc-w-full sm:pc-h-[var(--navbar-height-desktop)] sm:pc-px-8 sm:pc-py-4">
      <div
        className={cn(
          "pc-flex pc-w-full pc-flex-col pc-items-center pc-transition-colors pc-ease-linear",
          "sm:pc-h-full sm:pc-flex-row sm:pc-justify-between sm:pc-rounded-full sm:pc-bg-crema-cream-500/25 sm:pc-px-8 sm:pc-py-4 sm:pc-shadow-[0_0_4px_rgba(0,0,0,0.08)] sm:pc-backdrop-blur",
          isOpen && "pc-bg-black-mamba-400",
        )}
      >
        <div
          className={cn(
            "pc-z-10 pc-mt-[8px] pc-flex pc-h-[calc(var(--navbar-height-mobile)-8px)] pc-items-center pc-justify-between pc-border-b-2 pc-transition-all pc-ease-linear sm:pc-w-full",
            "sm:pc-mt-0 sm:pc-h-fit sm:pc-border-0 sm:pc-px-0 sm:pc-py-0 sm:pc-shadow-none",
            isOpen
              ? "pc-w-full pc-px-[2rem]"
              : "pc-w-[calc(100vw-2*1rem)] pc-rounded-full pc-border-transparent pc-bg-crema-cream-500/25 pc-px-4 pc-shadow-[0_0_4px_rgba(0,0,0,0.08)] pc-backdrop-blur sm:pc-bg-transparent sm:pc-backdrop-blur-[none]",
          )}
        >
          <HoooreLogo className="pc-h-[28px] pc-w-[89px] sm:pc-h-[48px] sm:pc-w-[152px]" />
          <Button
            onClick={toggleOpen}
            className="z-10 sm:pc-hidden"
            aria-label="Expand Navigation Bar"
          >
            {isOpen ? (
              <Cross1Icon className="pc-h-4 pc-w-4 pc-animate-in pc-zoom-in" />
            ) : (
              <HamburgerMenuIcon className="pc-h-4 pc-w-4 pc-animate-in pc-zoom-in" />
            )}
          </Button>
        </div>
        <div
          style={
            {
              "--navbar-content-height": "var(--navbar-height-mobile-content)",
            } as React.CSSProperties
          }
          className={cn(
            "pc-flex pc-w-full pc-flex-col pc-px-1 pc-transition-[height] pc-ease-linear pc-fill-mode-forwards",
            "sm:pc-h-full sm:pc-w-fit sm:pc-animate-none sm:pc-justify-center sm:pc-px-0 sm:pc-py-0",
            isOpen
              ? "pc-h-[var(--navbar-height-mobile-content)] pc-animate-[navbar-show] pc-py-2.5"
              : "pc-h-0 pc-animate-[navbar-hide]",
          )}
        >
          <div className="pc-overflow-scroll sm:pc-overflow-visible">
            <div className="pc-flex pc-flex-[2_2_0%] pc-flex-col pc-gap-2 sm:pc-flex-row sm:pc-gap-6">
              {children}
            </div>
          </div>
          {socialMedia && (
            <div className="pc-flex pc-flex-1 pc-flex-col pc-justify-end sm:pc-hidden">
              {socialMedia}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
