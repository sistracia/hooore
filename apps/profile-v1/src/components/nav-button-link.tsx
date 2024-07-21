import { NavButton, NavButtonProps } from "./nav-button";
import Link from "next/link";

export type NavButtonLinkProps = NavButtonProps;

export function NavButtonLink({ children, ...props }: NavButtonLinkProps) {
  return (
    <NavButton {...props}>
      <Link href={props.href}>{children}</Link>
    </NavButton>
  );
}
