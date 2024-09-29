import type { Team1Props, Team1Slug } from "../../types/template-types/team-1";
import type { ComponentRenderer } from "../types";

export type Team1RendererProps = Team1Props & {
  disableAnimation?: boolean;
  disableLink?: boolean;
  logo?: string;
};

export function Team1(props: Team1RendererProps) {
  const _ = props;

  return null;
}

export const TEAM_1_META: ComponentRenderer<Team1Slug, Team1RendererProps> = {
  slug: "team-1",
  component: Team1,
};
