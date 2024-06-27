"use client";

import { NavBar as ComponentNavBar } from "@repo/component-v1/navbar";
import { HoreyLogo } from "@repo/component-v1/horey-logo";
import { Button } from "@repo/component-v1/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@repo/component-v1/drowdown-menu";
import {
  EnvelopeClosedIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { cn } from "@repo/utils";
import { useLenis } from "@repo/smooth-scroll/lenis";

export function NavBar() {
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
    <div className="sticky top-0 z-10 w-full sm:px-8 sm:py-4">
      <ComponentNavBar
        isOpen={isOpen}
        toggleOpen={toggleOpen}
        title={<HoreyLogo />}
        navlist={
          <>
            <Button
              variant="text"
              justify="start"
              className={cn(
                "justify-start sm:justify-center",
                pathname === "/" && "bg-ivory-gading-300",
              )}
              asChild
            >
              <Link href="/">Beranda</Link>
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger justify="start">Service</DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Digital Product Design</DropdownMenuItem>
                <DropdownMenuItem>Software Development</DropdownMenuItem>
                <DropdownMenuItem>Training & Upscaling</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button
              variant="text"
              justify="start"
              className={cn(pathname === "/contact" && "bg-ivory-gading-300")}
              asChild
            >
              <Link href="/contact">Kontak</Link>
            </Button>
          </>
        }
        extra={
          <>
            <Button variant="text" justify="start">
              <EnvelopeClosedIcon className="mr-2 h-4 w-4" /> email@email.com
            </Button>
            <Button variant="text" justify="start">
              <InstagramLogoIcon className="mr-2 h-4 w-4" /> Instagram
            </Button>
            <Button variant="text" justify="start">
              <LinkedInLogoIcon className="mr-2 h-4 w-4" /> LinkedIn
            </Button>
          </>
        }
      />
    </div>
  );
}
