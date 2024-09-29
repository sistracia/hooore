import type {
  LogoList2Props,
  LogoList2Slug,
} from "../../types/template-types/logo-list-2";
import type { ComponentRenderer } from "../types";

export type LogoList2RendererProps = LogoList2Props & {
  disableAnimation?: boolean;
  disableLink?: boolean;
  logo?: string;
};

export function LogoList2(props: LogoList2RendererProps) {
  const _ = props;

  return null;
}

export const LOGO_LIST_2_META: ComponentRenderer<
  LogoList2Slug,
  LogoList2RendererProps
> = {
  slug: "logo-list-2",
  component: LogoList2,
};
