"use client";

import { NavBar as ComponentNavBar } from "@repo/component/navbar";
import { HoreyLogo } from "@repo/component/horey-logo";
import { Button } from "@repo/component/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@repo/component/drowdown-menu";
import {
  EnvelopeClosedIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { cn } from "@repo/utils";

export function NavBar() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen((isOpen) => {
      return !isOpen;
    });
  };

  useEffect(() => {
    setIsOpen(false);
  }, [pathname, searchParams]);

  return (
    <div className="fixed top-0 z-10 w-full sm:px-8">
      <ComponentNavBar
        isOpen={isOpen}
        toggleOpen={toggleOpen}
        title={<HoreyLogo />}
        navlist={
          <>
            <Button
              variant="text"
              className={cn(
                "justify-start sm:justify-center",
                pathname === "/" && "bg-ivory-gading-300",
              )}
              asChild
            >
              <Link href="/">Beranda</Link>
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger
                className={cn("justify-start sm:justify-center")}
              >
                Service
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Digital Product Design</DropdownMenuItem>
                <DropdownMenuItem>Software Development</DropdownMenuItem>
                <DropdownMenuItem>Training & Upscaling</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button
              variant="text"
              className={cn(
                "justify-start sm:justify-center",
                pathname === "/contact" && "bg-ivory-gading-300",
              )}
              asChild
            >
              <Link href="/contact">Kontak</Link>
            </Button>
          </>
        }
        extra={
          <>
            <Button variant="text" className="justify-start">
              <EnvelopeClosedIcon className="mr-2 h-4 w-4" /> email@email.com
            </Button>
            <Button variant="text" className="justify-start">
              <InstagramLogoIcon className="mr-2 h-4 w-4" /> Instagram
            </Button>
            <Button variant="text" className="justify-start">
              <LinkedInLogoIcon className="mr-2 h-4 w-4" /> LinkedIn
            </Button>
          </>
        }
      />
    </div>
  );
}
