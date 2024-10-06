import type { CallToAction2Props } from "../../types/template-types/call-to-action-2";

export type CallToAction2RendererProps = CallToAction2Props & {
  disableAnimation?: boolean;
  disableLink?: boolean;
  logo?: string;
};

export function CallToAction2(props: CallToAction2RendererProps) {
  const _ = props;

  return null;
}
