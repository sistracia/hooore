import { NavButton, type NavButtonProps } from "@repo/components-v1/nav-button";

export function shouldButtonActive(
  href: string,
  pathname?: string,
  startWith?: boolean,
) {
  return (startWith && pathname?.startsWith(href)) || pathname === href;
}

export type NavButtonLinkProps = NavButtonProps & {
  href: string;
  pathname?: string;
  startWith?: boolean;
};

export function NavButtonLink({
  href,
  pathname,
  startWith,
  children,
  ...props
}: NavButtonLinkProps) {
  return (
    <NavButton
      {...props}
      isActive={shouldButtonActive(href, pathname, startWith)}
    >
      <a href={href}>{children}</a>
    </NavButton>
  );
}
