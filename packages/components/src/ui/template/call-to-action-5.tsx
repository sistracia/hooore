import type {
  CallToAction5Props,
  CallToAction5Slug,
} from "../../types/template-types/call-to-action-5";
import type { ComponentRenderer } from "../types";

export type CallToAction5RendererProps = CallToAction5Props & {
  disableAnimation?: boolean;
  disableLink?: boolean;
  logo?: string;
};

export function CallToAction5(props: CallToAction5RendererProps) {
  const _ = props;

  return null;
}

export const CALL_TO_ACTION_5_META: ComponentRenderer<
  CallToAction5Slug,
  CallToAction5RendererProps
> = {
  slug: "call-to-action-5",
  component: CallToAction5,
};
