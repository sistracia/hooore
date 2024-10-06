import type { Step1Props } from "../../types/template-types/step-1";

export type Step1RendererProps = Step1Props & {
  disableAnimation?: boolean;
  disableLink?: boolean;
  logo?: string;
};

export function Step1(props: Step1RendererProps) {
  const _ = props;

  return null;
}
