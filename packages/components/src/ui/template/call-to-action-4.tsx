import type {
  CallToAction4Props,
  CallToAction4Slug,
} from "../../types/template-types/call-to-action-4";
import type { ComponentRenderer } from "../types";

export type CallToAction4RendererProps = CallToAction4Props & {
  disableAnimation?: boolean;
  disableLink?: boolean;
  logo?: string;
};

export function CallToAction4(props: CallToAction4RendererProps) {
  const _ = props;

  return null;
}

export const CALL_TO_ACTION_4_META: ComponentRenderer<
  CallToAction4Slug,
  CallToAction4RendererProps
> = {
  slug: "call-to-action-4",
  component: CallToAction4,
};
