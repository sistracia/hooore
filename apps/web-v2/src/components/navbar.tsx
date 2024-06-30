"use client";

import {
  ChevronDownIcon,
  Cross1Icon,
  HamburgerMenuIcon,
} from "@radix-ui/react-icons";
import { Button } from "./button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "./dropdown-menu";
import { cn } from "@repo/utils";
import { useEffect, useState } from "react";
import { ReactLenis, useLenis } from "@repo/smooth-scroll/lenis";
import { usePathname, useSearchParams } from "next/navigation";
import { HoooreLogo } from "./hooore-logo";
import { SocialMediaLinks } from "./social-media-links";
import { NavButtonLink } from "./nav-button-link";
import { NavButton } from "./nav-button";

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
          "ss-flex ss-w-full ss-flex-col ss-items-center ss-transition-colors ss-ease-linear",
          "sm:ss-h-fit sm:ss-flex-row sm:ss-justify-between sm:ss-rounded-full sm:ss-bg-crema-cream-500/25 sm:ss-px-8 sm:ss-py-4 sm:ss-shadow-[0_0_4px_rgba(0,0,0,0.08)]",
          isOpen && "ss-bg-black-mamba-400",
        )}
      >
        <div
          className={cn(
            "ss-z-10 ss-mt-2 ss-flex ss-h-[10vh] ss-items-center ss-justify-between ss-border-b-2 ss-transition-all ss-ease-linear sm:ss-w-full",
            "sm:ss-h-fit sm:ss-border-0 sm:ss-px-0 sm:ss-py-0 sm:ss-shadow-none",
            isOpen
              ? "ss-w-full ss-px-8"
              : "ss-w-[calc(100vw-2*16px)] ss-rounded-full ss-border-transparent ss-bg-crema-cream-500/25 ss-px-4 ss-shadow-[0_0_4px_rgba(0,0,0,0.08)] sm:ss-bg-transparent",
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
          style={{ "--navbar-content-height": "90vh" } as React.CSSProperties}
          className={cn(
            "ss-flex ss-w-full ss-flex-col ss-px-1 ss-transition-[height] ss-ease-linear ss-fill-mode-forwards",
            "sm:ss-h-full sm:ss-w-fit sm:ss-animate-none sm:ss-overflow-visible sm:ss-px-0 sm:ss-py-0",
            isOpen
              ? "ss-h-[90vh] ss-animate-[navbar-show] ss-py-2.5"
              : "ss-h-0 ss-animate-[navbar-hide]",
          )}
        >
          <ReactLenis className="ss-overflow-scroll">
            <div className="ss-flex ss-flex-[2_2_0%] ss-flex-col ss-gap-2 sm:ss-flex-row sm:ss-gap-6">
              <NavButtonLink href="/" pathname={pathname}>
                Beranda
              </NavButtonLink>
              <div className="ss-hidden sm:ss-block">
                <DropdownMenu>
                  <NavButton
                    href="/service"
                    pathname={pathname}
                    startWith={true}
                  >
                    <DropdownMenuTrigger>
                      Services
                      <ChevronDownIcon className="ss-h-4 ss-w-4" />
                    </DropdownMenuTrigger>
                  </NavButton>
                  <DropdownMenuContent
                    align="start"
                    className="ss-flex ss-flex-col"
                  >
                    <NavButtonLink
                      href="/service/software-development"
                      pathname={pathname}
                    >
                      Software Development
                    </NavButtonLink>
                    <NavButtonLink
                      href="/service/ui-ux-design"
                      pathname={pathname}
                    >
                      UI/UX Design
                    </NavButtonLink>
                    <NavButtonLink
                      href="/service/training-upskilling"
                      pathname={pathname}
                    >
                      Training & Upskilling
                    </NavButtonLink>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <div className="ss-block ss-border-2 ss-border-transparent ss-p-2 sm:ss-hidden">
                <NavButton href="/service" pathname={pathname} startWith={true}>
                  <span className="ss-block">Services</span>
                </NavButton>
                <div className="ss-flex ss-flex-col ss-py-2 ss-pl-8">
                  <NavButtonLink
                    href="/service/software-development"
                    pathname={pathname}
                  >
                    Software Development
                  </NavButtonLink>
                  <NavButtonLink
                    href="/service/ui-ux-design"
                    pathname={pathname}
                  >
                    UI/UX Design
                  </NavButtonLink>
                  <NavButtonLink
                    href="/service/training-upskilling"
                    pathname={pathname}
                  >
                    Training & Upskilling
                  </NavButtonLink>
                </div>
              </div>

              <NavButtonLink href="/about-us" pathname={pathname}>
                About Us
              </NavButtonLink>
              <NavButtonLink href="/contact-us" pathname={pathname}>
                Contact
              </NavButtonLink>
            </div>
          </ReactLenis>
          <div className="ss-flex ss-flex-1 ss-flex-col ss-justify-end sm:ss-hidden">
            <SocialMediaLinks justify="start" />
          </div>
        </div>
      </div>
    </nav>
  );
}
