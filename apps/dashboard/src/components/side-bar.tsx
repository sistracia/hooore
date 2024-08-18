"use client";

import Link from "next/link";
import { Button, ButtonProps } from "./ui/button";
import {
  ChevronLeftIcon,
  ExitIcon,
  FileTextIcon,
  GearIcon,
  //   EnvelopeOpenIcon,
  //   ReaderIcon,
} from "@repo/icon";
import { cn } from "@repo/utils";
import { Fragment, useState } from "react";
import { usePathname } from "next/navigation";

function shouldButtonActive(
  href: string,
  pathname?: string,
  startWith?: boolean,
) {
  return (startWith && pathname?.startsWith(href)) || pathname === href;
}

type NavButtonLinkProps = ButtonProps & {
  href?: string;
  pathname?: string;
  startWith?: boolean;
  icon?: React.ReactNode;
  iconOnly?: boolean;
};

function NavButtonLink({
  href,
  pathname,
  startWith,
  children,
  className,
  icon,
  iconOnly,
  ...props
}: NavButtonLinkProps) {
  const child = (
    <Fragment>
      {icon}
      {!iconOnly && children}
    </Fragment>
  );

  return (
    <Button
      asChild={href !== undefined}
      variant="ghost"
      justify={iconOnly ? "default" : "start"}
      font="normal"
      {...props}
      className={cn(
        "dd-gap-4",
        className,
        href &&
          shouldButtonActive(href, pathname, startWith) &&
          "dd-bg-accent dd-text-accent-foreground",
      )}
    >
      {href ? <Link href={href}>{child}</Link> : child}
    </Button>
  );
}

export type SideBarProps = {
  userName?: string;
  userEmail?: string;
  className?: string;
  projectId: string;
  onLogout?: () => void;
};

export function SideBar({
  userEmail,
  userName,
  projectId,
  className,
  onLogout,
}: SideBarProps) {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(true);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <aside
      className={cn(
        "dd-flex dd-h-full dd-w-full dd-flex-col dd-border-r-2",
        isOpen ? "dd-max-w-[240px]" : "dd-max-w-[70px]",
        className,
      )}
    >
      <div className="dd-relative dd-flex-1 dd-border-b-2 dd-p-2">
        <span
          className={cn(
            "dd-mb-2 dd-block dd-font-semibold",
            isOpen && "dd-px-4",
          )}
        >
          Site Menu
        </span>
        <div className="dd-flex dd-flex-col dd-gap-2">
          <NavButtonLink
            href={`/project/${projectId}/settings`}
            pathname={pathname}
            iconOnly={!isOpen}
            icon={<GearIcon className="dd-h-4 dd-w-4" />}
          >
            Settings
          </NavButtonLink>
          <NavButtonLink
            href={`/project/${projectId}/pages`}
            pathname={pathname}
            iconOnly={!isOpen}
            icon={<FileTextIcon className="dd-h-4 dd-w-4" />}
          >
            Pages
          </NavButtonLink>
          {/* <NavButtonLink
            href={`/project/${projectId}/blogs`}
            pathname={pathname}
            iconOnly={!isOpen}
            icon={<ReaderIcon className="dd-h-4 dd-w-4" />}
          >
            Blog
          </NavButtonLink>
          <NavButtonLink
            href={`/project/${projectId}/forms`}
            pathname={pathname}
            iconOnly={!isOpen}
            icon={<EnvelopeOpenIcon className="dd-h-4 dd-w-4" />}
          >
            Form
          </NavButtonLink> */}
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
      <div className="dd-p-2">
        <div className="dd-flex dd-flex-wrap dd-items-center dd-justify-start dd-gap-2 dd-p-2">
          <div className="dd-h-[36px] dd-w-[36px] dd-rounded-full dd-bg-gray-400"></div>
          {(userName || userEmail) && isOpen && (
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
        <NavButtonLink
          iconOnly={!isOpen}
          icon={<ExitIcon className="dd-h-4 dd-w-4" />}
          className="dd-w-full"
          onClick={() => {
            onLogout?.();
          }}
        >
          Log Out
        </NavButtonLink>
      </div>
    </aside>
  );
}
