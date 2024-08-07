"use client";

import {
  ChevronDownIcon,
  Cross1Icon,
  HamburgerMenuIcon,
} from "@radix-ui/react-icons";
import { Button, type ButtonProps } from "./button";
import { cn } from "@repo/utils";
import { NavbarItemProps, NavbarProps } from "../types/nav-bar";
import { useEffect, useState } from "react";

export type NavButtonProps = ButtonProps & {
  isActive?: boolean;
};

export function NavButton({
  isActive,
  children,
  className,
  ...props
}: NavButtonProps) {
  return (
    <Button
      {...props}
      className={cn(
        "pc-justify-start pc-rounded-full pc-border-2",
        isActive
          ? "pc-border-transparent pc-bg-crema-cream-500/25 sm:pc-border-crema-cream-500 sm:pc-bg-transparent"
          : "pc-border-transparent",
        className,
      )}
    >
      {children}
    </Button>
  );
}

function shouldButtonActive(
  href: string = "*",
  pathname?: string,
  startWith?: boolean,
) {
  return (startWith && pathname?.startsWith(href)) || pathname === href;
}

type NavButtonLinkProps = NavButtonProps & {
  href?: string;
  pathname?: string;
  startWith?: boolean;
  disableLink?: boolean;
};

function NavButtonLink({
  href,
  pathname,
  startWith,
  children,
  disableLink,
  ...props
}: NavButtonLinkProps) {
  return (
    <NavButton
      {...props}
      isActive={shouldButtonActive(href, pathname, startWith)}
      asChild={true}
    >
      <a href={disableLink ? undefined : href}>{children}</a>
    </NavButton>
  );
}

function NavBarDropdown(
  props: Pick<
    NavButtonLinkProps,
    "href" | "pathname" | "children" | "disableLink"
  > &
    Pick<NavbarItemProps, "sub_link">,
) {
  const { href, pathname, children, disableLink, sub_link } = props;
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen((isOpen) => {
      return !isOpen;
    });
  };

  return (
    <div className="pc-relative">
      <NavButton
        isActive={shouldButtonActive(href, pathname, true)}
        asChild={false}
        onClick={toggleOpen}
        className="pc-w-full pc-justify-between"
      >
        {children} <ChevronDownIcon className="pc-h-4 pc-w-4" />
      </NavButton>
      {sub_link && isOpen && (
        <div
          className={cn(
            "pc-flex pc-flex-col pc-bg-page-background pc-py-2 pc-pl-8",
            "sm:pc-absolute sm:pc-top-[110%] sm:pc-z-50 sm:pc-min-w-[8rem] sm:pc-rounded-md sm:pc-p-1 sm:pc-shadow-md",
          )}
        >
          {sub_link.map((subLink, subLinkIndex) => {
            return (
              <NavButtonLink
                pathname={pathname}
                key={subLinkIndex}
                href={subLink.link}
                disableLink={disableLink}
                asChild={true}
              >
                {subLink.label}
              </NavButtonLink>
            );
          })}
        </div>
      )}
    </div>
  );
}

export function Navbar(
  props: NavbarProps & {
    logo?: React.ReactNode;
    socials?: React.ReactNode;
    disableLink?: boolean;
    className?: string;
  },
) {
  const { socials, logo, link, className, disableLink = false } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [pathname, setPathname] = useState<string | undefined>();

  const toggleOpen = () => {
    setIsOpen((isOpen) => {
      return !isOpen;
    });
  };

  useEffect(() => {
    if (disableLink) {
      return;
    }

    const windowPathname = window.location.pathname;
    const pathname = windowPathname.substring(0, windowPathname.length - 1);
    setPathname(pathname || "/");
  }, []);

  return (
    <nav
      className={cn(
        "pc-absolute pc-top-0 pc-z-50 pc-w-full sm:pc-h-[var(--navbar-height-desktop)] sm:pc-px-8 sm:pc-py-4",
        className,
      )}
    >
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
          {logo}
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
          {link && (
            <div className="pc-overflow-scroll sm:pc-overflow-visible">
              <div className="pc-flex pc-flex-[2_2_0%] pc-flex-col pc-gap-2 sm:pc-flex-row sm:pc-gap-6">
                {link.map((link, linkIndex) => {
                  if (link.sub_link && link.sub_link.length !== 0) {
                    return (
                      <NavBarDropdown
                        pathname={pathname}
                        key={linkIndex}
                        href={link.link}
                        disableLink={disableLink}
                        sub_link={link.sub_link}
                      >
                        {link.label}
                      </NavBarDropdown>
                    );
                  }
                  return (
                    link.label && (
                      <NavButtonLink
                        pathname={pathname}
                        key={linkIndex}
                        href={link.link}
                        disableLink={disableLink}
                      >
                        {link.label}
                      </NavButtonLink>
                    )
                  );
                })}
              </div>
            </div>
          )}
          {socials && (
            <div className="pc-flex pc-flex-1 pc-flex-col pc-justify-end sm:pc-hidden">
              {socials}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
