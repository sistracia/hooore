import type { Contact1Props } from "../../types/template-types/contact-1";

export type Contact1RendererProps = Contact1Props & {
  disableAnimation?: boolean;
  disableLink?: boolean;
  logo?: string;
};

export function Contact1(props: Contact1RendererProps) {
  const _ = props;

  return null;
}
