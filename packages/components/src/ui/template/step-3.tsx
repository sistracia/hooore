import type { Step3Props, Step3Slug } from "../../types/template-types/step-3";
import type { ComponentRenderer } from "../types";

export type Step3RendererProps = Step3Props & {
  disableAnimation?: boolean;
  disableLink?: boolean;
  logo?: string;
};

export function Step3(props: Step3RendererProps) {
  const _ = props;

  return null;
}

export const STEP_3_META: ComponentRenderer<Step3Slug, Step3RendererProps> = {
  slug: "step-3",
  component: Step3,
};
