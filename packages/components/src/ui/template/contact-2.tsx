import type { Contact2Props } from "../../types/template-types/contact-2";

export type Contact2RendererProps = Contact2Props & {
  disableAnimation?: boolean;
  disableLink?: boolean;
  logo?: string;
};

export function Contact2(props: Contact2RendererProps) {
  const _ = props;

  return null;
}
