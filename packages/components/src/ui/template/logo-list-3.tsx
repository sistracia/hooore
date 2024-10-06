import type { LogoList3Props } from "../../types/template-types/logo-list-3";

export type LogoList3RendererProps = LogoList3Props & {
  disableAnimation?: boolean;
  disableLink?: boolean;
  logo?: string;
};

export function LogoList3(props: LogoList3RendererProps) {
  const _ = props;

  return null;
}
