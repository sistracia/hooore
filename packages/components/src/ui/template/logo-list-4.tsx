import type {
  LogoList4Props,
  LogoList4Slug,
} from "../../types/template-types/logo-list-4";
import type { ComponentRenderer } from "../types";

export type LogoList4RendererProps = LogoList4Props & {
  disableAnimation?: boolean;
  disableLink?: boolean;
  logo?: string;
};

export function LogoList4(props: LogoList4RendererProps) {
  const _ = props;

  return null;
}

export const LOGO_LIST_4_META: ComponentRenderer<
  LogoList4Slug,
  LogoList4RendererProps
> = {
  slug: "logo-list-4",
  component: LogoList4,
};
