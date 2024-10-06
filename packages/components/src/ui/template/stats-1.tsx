import type { Stats1Props } from "../../types/template-types/stats-1";

export type Stats1RendererProps = Stats1Props & {
  disableAnimation?: boolean;
  disableLink?: boolean;
  logo?: string;
};

export function Stats1(props: Stats1RendererProps) {
  const _ = props;

  return null;
}
