import type {
  Stats1Props,
  Stats1Slug,
} from "../../types/template-types/stats-1";
import type { ComponentRenderer } from "../types";

export type Stats1RendererProps = Stats1Props & {
  disableAnimation?: boolean;
  disableLink?: boolean;
  logo?: string;
};

export function Stats1(props: Stats1RendererProps) {
  const _ = props;

  return null;
}

export const STATS_1_META: ComponentRenderer<Stats1Slug, Stats1RendererProps> =
  {
    slug: "stats-1",
    component: Stats1,
  };
