import type {
  Stats3Props,
  Stats3Slug,
} from "../../types/template-types/stats-3";
import type { ComponentRenderer } from "../types";

export type Stats3RendererProps = Stats3Props & {
  disableAnimation?: boolean;
  disableLink?: boolean;
  logo?: string;
};

export function Stats3(props: Stats3RendererProps) {
  const _ = props;

  return null;
}

export const STATS_3_META: ComponentRenderer<Stats3Slug, Stats3RendererProps> =
  {
    slug: "stats-3",
    component: Stats3,
  };
