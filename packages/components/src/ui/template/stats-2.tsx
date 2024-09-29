import type {
  Stats2Props,
  Stats2Slug,
} from "../../types/template-types/stats-2";
import type { ComponentRenderer } from "../types";

export type Stats2RendererProps = Stats2Props & {
  disableAnimation?: boolean;
  disableLink?: boolean;
  logo?: string;
};

export function Stats2(props: Stats2RendererProps) {
  const _ = props;

  return null;
}

export const STATS_2_META: ComponentRenderer<Stats2Slug, Stats2RendererProps> =
  {
    slug: "stats-2",
    component: Stats2,
  };
