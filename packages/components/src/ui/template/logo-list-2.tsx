import type { LogoList2Props } from "../../types/template-types/logo-list-2";

export type LogoList2RendererProps = LogoList2Props & {
  disableAnimation?: boolean;
  disableLink?: boolean;
  logo?: string;
};

export function LogoList2(props: LogoList2RendererProps) {
  const _ = props;

  return null;
}
