import type { Team2Props, Team2Slug } from "../../types/template-types/team-2";
import type { ComponentRenderer } from "../types";

export type Team2RendererProps = Team2Props & {
  disableAnimation?: boolean;
  disableLink?: boolean;
  logo?: string;
};

export function Team2(props: Team2RendererProps) {
  const _ = props;

  return null;
}

export const TEAM_2_META: ComponentRenderer<Team2Slug, Team2RendererProps> = {
  slug: "team-2",
  component: Team2,
};
