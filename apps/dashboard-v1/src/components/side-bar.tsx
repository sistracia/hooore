"use client";

import Link from "next/link";
import { Button, ButtonProps } from "./ui/button";
import {
  ChevronLeftIcon,
  EnvelopeOpenIcon,
  FileTextIcon,
  GearIcon,
  ReaderIcon,
} from "@radix-ui/react-icons";
import { cn } from "@repo/utils";
import { useState } from "react";
import { usePathname } from "next/navigation";

function shouldButtonActive(
  href: string,
  pathname?: string,
  startWith?: boolean,
) {
  return (startWith && pathname?.startsWith(href)) || pathname === href;
}

type NavButtonLinkProps = ButtonProps & {
  href: string;
  pathname?: string;
  startWith?: boolean;
};

function NavButtonLink({
  href,
  pathname,
  startWith,
  children,
  className,
  ...props
}: NavButtonLinkProps) {
  return (
    <Button
      asChild
      variant="ghost"
      justify="start"
      font="normal"
      {...props}
      className={cn(
        className,
        shouldButtonActive(href, pathname, startWith) &&
          "dd-bg-accent dd-text-accent-foreground",
      )}
    >
      <Link href={href}>{children}</Link>
    </Button>
  );
}

export type SideBarProps = {
  userName?: string;
  userEmail?: string;
  className?: string;
};

export function SideBar({ userEmail, userName, className }: SideBarProps) {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(true);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <aside
      className={cn("dd-flex dd-h-full dd-flex-col dd-border-r-2", className)}
    >
      <div className="dd-relative dd-flex-1 dd-border-b-2 dd-p-2">
        <span className="dd-mb-2 dd-block dd-px-4 dd-font-semibold">
          Site Menu
        </span>
        <div className="dd-flex dd-flex-col dd-gap-2">
          <NavButtonLink href="/settings" pathname={pathname}>
            <GearIcon className="dd-mr-2 dd-h-4 dd-w-4" />
            Settings
          </NavButtonLink>
          <NavButtonLink href="/pages" pathname={pathname}>
            <FileTextIcon className="dd-mr-2 dd-h-4 dd-w-4" />
            Pages
          </NavButtonLink>
          <NavButtonLink href="/blog" pathname={pathname}>
            <ReaderIcon className="dd-mr-2 dd-h-4 dd-w-4" />
            Blog
          </NavButtonLink>
          <NavButtonLink href="/blog" pathname={pathname}>
            <EnvelopeOpenIcon className="dd-mr-2 dd-h-4 dd-w-4" />
            Form
          </NavButtonLink>
        </div>
        <Button
          type="submit"
          variant="outline"
          size="icon-sm"
          className={cn(
            "dd-absolute dd-right-0 dd-top-2/4 dd-translate-x-2/4",
            !isOpen && "dd-rotate-180",
          )}
          onClick={toggleOpen}
        >
          <ChevronLeftIcon className="dd-h-3 dd-w-3" />
        </Button>
      </div>
      <div className="dd-flex dd-flex-wrap dd-items-center dd-justify-start dd-gap-2 dd-p-4">
        <div className="dd-h-[36px] dd-w-[36px] dd-rounded-full dd-bg-gray-400"></div>
        {(userName || userEmail) && (
          <div>
            {userName && (
              <span className="dd-block dd-text-sm dd-font-medium">
                {userName}
              </span>
            )}
            {userEmail && (
              <span className="dd-block dd-text-xs dd-text-muted-foreground">
                {userEmail}
              </span>
            )}
          </div>
        )}
      </div>
    </aside>
  );
}
