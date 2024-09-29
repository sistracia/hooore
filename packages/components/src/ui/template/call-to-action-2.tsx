import type {
  CallToAction2Props,
  CallToAction2Slug,
} from "../../types/template-types/call-to-action-2";
import type { ComponentRenderer } from "../types";

export type CallToAction2RendererProps = CallToAction2Props & {
  disableAnimation?: boolean;
  disableLink?: boolean;
  logo?: string;
};

export function CallToAction2(props: CallToAction2RendererProps) {
  const _ = props;

  return null;
}

export const CALL_TO_ACTION_2_META: ComponentRenderer<
  CallToAction2Slug,
  CallToAction2RendererProps
> = {
  slug: "call-to-action-2",
  component: CallToAction2,
};
