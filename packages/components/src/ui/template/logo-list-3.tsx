import type {
  LogoList3Props,
  LogoList3Slug,
} from "../../types/template-types/logo-list-3";
import type { ComponentRenderer } from "../types";

export type LogoList3RendererProps = LogoList3Props & {
  disableAnimation?: boolean;
  disableLink?: boolean;
  logo?: string;
};

export function LogoList3(props: LogoList3RendererProps) {
  const _ = props;

  return null;
}

export const LOGO_LIST_3_META: ComponentRenderer<
  LogoList3Slug,
  LogoList3RendererProps
> = {
  slug: "logo-list-3",
  component: LogoList3,
};
