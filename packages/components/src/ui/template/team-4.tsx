import type { Team4Props, Team4Slug } from "../../types/template-types/team-4";
import type { ComponentRenderer } from "../types";

export type Team4RendererProps = Team4Props & {
  disableAnimation?: boolean;
  disableLink?: boolean;
  logo?: string;
};

export function Team4(props: Team4RendererProps) {
  const _ = props;

  return null;
}

export const TEAM_4_META: ComponentRenderer<Team4Slug, Team4RendererProps> = {
  slug: "team-4",
  component: Team4,
};
