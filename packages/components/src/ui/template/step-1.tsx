import type { Step1Props, Step1Slug } from "../../types/template-types/step-1";
import type { ComponentRenderer } from "../types";

export type Step1RendererProps = Step1Props & {
  disableAnimation?: boolean;
  disableLink?: boolean;
  logo?: string;
};

export function Step1(props: Step1RendererProps) {
  const _ = props;

  return null;
}

export const STEP_1_META: ComponentRenderer<Step1Slug, Step1RendererProps> = {
  slug: "step-1",
  component: Step1,
};
