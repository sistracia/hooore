import type { NavbarComponent as NavbarComponentV1 } from "@repo/components-v1/types/page-content";
import type { TemplateCode } from "@/actions/project.definition";
import { NavbarForm } from "./components-v1/navbar-form";

export type NavbarComponent = NavbarComponentV1;

export type NavbarFormRendererProps = NavbarComponent & {
  code: TemplateCode;
  projectId: string;
  onChange: (values: NavbarComponent) => void;
};

export function NavbarFormRenderer(props: NavbarFormRendererProps) {
  if (props.code === "company-profile-1" && props.slug === "navbar") {
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
