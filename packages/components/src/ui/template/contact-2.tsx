import type {
  Contact2Props,
  Contact2Slug,
} from "../../types/template-types/contact-2";
import type { ComponentRenderer } from "../types";

export type Contact2RendererProps = Contact2Props & {
  disableAnimation?: boolean;
  disableLink?: boolean;
  logo?: string;
};

export function Contact2(props: Contact2RendererProps) {
  const _ = props;

  return null;
}

export const CONTACT_2_META: ComponentRenderer<
  Contact2Slug,
  Contact2RendererProps
> = {
  slug: "contact-2",
  component: Contact2,
};
