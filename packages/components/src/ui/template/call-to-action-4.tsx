import type { CallToAction4Props } from "../../types/template-types/call-to-action-4";

export type CallToAction4RendererProps = CallToAction4Props & {
  disableAnimation?: boolean;
  disableLink?: boolean;
  logo?: string;
};

export function CallToAction4(props: CallToAction4RendererProps) {
  const _ = props;

  return null;
}
