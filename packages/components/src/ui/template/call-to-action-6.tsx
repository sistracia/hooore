import type {
  CallToAction6Props,
  CallToAction6Slug,
} from "../../types/template-types/call-to-action-6";
import type { ComponentRenderer } from "../types";

export type CallToAction6RendererProps = CallToAction6Props & {
  disableAnimation?: boolean;
  disableLink?: boolean;
  logo?: string;
};

export function CallToAction6(props: CallToAction6RendererProps) {
  const _ = props;

  return null;
}

export const CALL_TO_ACTION_6_META: ComponentRenderer<
  CallToAction6Slug,
  CallToAction6RendererProps
> = {
  slug: "call-to-action-6",
  component: CallToAction6,
};
