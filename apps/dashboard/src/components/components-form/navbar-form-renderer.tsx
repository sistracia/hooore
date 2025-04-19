import type {
  Navbar1Component,
  PageContentComponent,
} from "@hooore/components/types/page-content";
import { FormRenderer } from "./form-renderer";
import { NAVBAR_SCHEMAS } from "./navbar-form-renderer-schemas";

export type NavbarComponent = Navbar1Component;

export type NavbarFormRendererProps = PageContentComponent & {
  onChange: (values: PageContentComponent) => void;
  projectId: string;
};

export function NavbarFormRenderer(props: NavbarFormRendererProps) {
  return <FormRenderer {...props} schemas={NAVBAR_SCHEMAS} />;
}
