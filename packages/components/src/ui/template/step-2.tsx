import type { Step2Props, Step2Slug } from "../../types/template-types/step-2";
import type { ComponentRenderer } from "../types";

export type Step2RendererProps = Step2Props & {
  disableAnimation?: boolean;
  disableLink?: boolean;
  logo?: string;
};

export function Step2(props: Step2RendererProps) {
  const _ = props;

  return null;
}

export const STEP_2_META: ComponentRenderer<Step2Slug, Step2RendererProps> = {
  slug: "step-2",
  component: Step2,
};
