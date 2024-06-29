"use client";

import { Cross1Icon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Button } from "./button";
import { cn } from "@repo/utils";
import { useEffect, useState } from "react";
import { useLenis } from "@repo/smooth-scroll/lenis";
import { usePathname, useSearchParams } from "next/navigation";
import { HoooreLogo } from "./hooore-logo";
import Link from "next/link";
import { SocialMediaLinks } from "./social-media-links";

export function Navbar() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const lenis = useLenis();
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    if (isOpen) {
      lenis?.start();
    } else {
      lenis?.stop();
    }

    setIsOpen((isOpen) => {
      return !isOpen;
    });
  };

  useEffect(() => {
    setIsOpen(false);
    lenis?.start();
  }, [pathname, searchParams]);

  return (
    <nav className="ss-fixed ss-top-0 ss-z-50 ss-w-full sm:ss-px-8 sm:ss-py-4">
      <div
        className={cn(
          "ss-flex ss-w-full ss-flex-col ss-items-center ss-bg-transparent sm:ss-flex-row sm:ss-justify-between",
          "sm:ss-h-fit sm:ss-rounded-full sm:ss-bg-crema-cream-500/25 sm:ss-px-8 sm:ss-py-4 sm:ss-shadow-[0_0_4px_rgba(0,0,0,0.08)]",
          !isOpen && "ss-h-[10dvh] ss-px-[16px] ss-py-[8px]",
        )}
      >
        <div
          className={cn(
            "ss-z-10 ss-flex ss-w-full ss-items-center ss-justify-between ss-border-b-2",
            "sm:ss-h-fit sm:ss-border-0 sm:ss-bg-transparent sm:ss-p-0 sm:ss-shadow-none",
            isOpen
              ? "ss-border-ink-cumi-50 ss-h-[10dvh] ss-bg-black-mamba-400 ss-px-[40px] ss-py-[24px]"
              : "ss-h-full ss-rounded-full ss-border-transparent ss-bg-crema-cream-500/25 ss-px-[24px] ss-py-[16px] ss-shadow-[0_0_4px_rgba(0,0,0,0.08)]",
          )}
        >
          <HoooreLogo className="ss-h-full ss-w-auto sm:ss-h-[48px]" />
          <Button onClick={toggleOpen} className="z-10 sm:ss-hidden">
            {isOpen ? (
              <Cross1Icon className="ss-h-4 ss-w-4 ss-animate-in ss-zoom-in" />
            ) : (
              <HamburgerMenuIcon className="ss-h-4 ss-w-4 ss-animate-in ss-zoom-in" />
            )}
          </Button>
        </div>
        <div
          style={{ "--navbar-content-height": "90dvh" } as React.CSSProperties}
          className={cn(
            "ss-flex ss-w-full ss-flex-col ss-bg-black-mamba-400 ss-px-1 ss-transition-all ss-duration-100 ss-ease-linear ss-fill-mode-forwards sm:ss-h-full sm:ss-w-fit sm:ss-animate-none sm:ss-overflow-visible sm:ss-bg-transparent sm:ss-px-0 sm:ss-py-0",
            isOpen
              ? "ss-animate-[navbar-show] ss-py-2.5"
              : "ss-animate-[navbar-hide] ss-overflow-hidden ss-py-0",
          )}
        >
          <div className="ss-flex ss-flex-[2_2_0%] ss-flex-col ss-gap-2 sm:ss-flex-row sm:ss-gap-6">
            <Button
              asChild
              className={cn(
                "ss-justify-start ss-rounded-full ss-border-2 sm:ss-justify-center",
                pathname === "/"
                  ? "ss-border-transparent ss-bg-crema-cream-500/25 sm:ss-border-crema-cream-500 sm:ss-bg-transparent"
                  : "ss-border-transparent",
              )}
            >
              <Link href="/">Beranda</Link>
            </Button>
            <Button
              asChild
              className={cn(
                "ss-justify-start ss-rounded-full ss-border-2 sm:ss-justify-center",
                pathname === "/about-us"
                  ? "ss-border-transparent ss-bg-crema-cream-500/25 sm:ss-border-crema-cream-500 sm:ss-bg-transparent"
                  : "ss-border-transparent",
              )}
            >
              <Link href="/about-us">About Us</Link>
            </Button>
            <Button
              asChild
              className={cn(
                "ss-justify-start ss-rounded-full ss-border-2 sm:ss-justify-center",
                pathname === "/contact-us"
                  ? "ss-border-transparent ss-bg-crema-cream-500/25 sm:ss-border-crema-cream-500 sm:ss-bg-transparent"
                  : "ss-border-transparent",
              )}
            >
              <Link href="/contact-us">Contact</Link>
            </Button>
          </div>
          <div className="ss-flex ss-flex-1 ss-flex-col ss-justify-end sm:ss-hidden">
            <SocialMediaLinks justify="start" />
          </div>
        </div>
      </div>
    </nav>
  );
}
