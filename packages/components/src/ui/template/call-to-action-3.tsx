import type {
  CallToAction3Props,
  CallToAction3Slug,
} from "../../types/template-types/call-to-action-3";
import type { ComponentRenderer } from "../types";

export type CallToAction3RendererProps = CallToAction3Props & {
  disableAnimation?: boolean;
  disableLink?: boolean;
  logo?: string;
};

export function CallToAction3(props: CallToAction3RendererProps) {
  const _ = props;

  return null;
}

export const CALL_TO_ACTION_3_META: ComponentRenderer<
  CallToAction3Slug,
  CallToAction3RendererProps
> = {
  slug: "call-to-action-3",
  component: CallToAction3,
};
