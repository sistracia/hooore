import type {
  Contact1Props,
  Contact1Slug,
} from "../../types/template-types/contact-1";
import type { ComponentRenderer } from "../types";

export type Contact1RendererProps = Contact1Props & {
  disableAnimation?: boolean;
  disableLink?: boolean;
  logo?: string;
};

export function Contact1(props: Contact1RendererProps) {
  const _ = props;

  return null;
}

export const CONTACT_1_META: ComponentRenderer<
  Contact1Slug,
  Contact1RendererProps
> = {
  slug: "contact-1",
  component: Contact1,
};
