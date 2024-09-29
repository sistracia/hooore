import type { Team3Props, Team3Slug } from "../../types/template-types/team-3";
import type { ComponentRenderer } from "../types";

export type Team3RendererProps = Team3Props & {
  disableAnimation?: boolean;
  disableLink?: boolean;
  logo?: string;
};

export function Team3(props: Team3RendererProps) {
  const _ = props;

  return null;
}

export const TEAM_3_META: ComponentRenderer<Team3Slug, Team3RendererProps> = {
  slug: "team-3",
  component: Team3,
};
