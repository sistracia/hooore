import type { Navbar1Component } from "@repo/components/types/page-content";
import { NavbarForm } from "./navbar-1-form";

export type NavbarComponent = Navbar1Component;

export type NavbarFormRendererProps = NavbarComponent & {
  projectId: string;
  onChange: (values: NavbarComponent) => void;
};

export function NavbarFormRenderer(props: NavbarFormRendererProps) {
  if (props.slug === "navbar-1") {
    return (
      <NavbarForm
        projectId={props.projectId}
        slug={props.slug}
        content={props.content}
        onChange={props.onChange}
      />
    );
  }

  return null;
}
