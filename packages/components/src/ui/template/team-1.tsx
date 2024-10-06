import type { Team1Props } from "../../types/template-types/team-1";

export type Team1RendererProps = Team1Props & {
  disableAnimation?: boolean;
  disableLink?: boolean;
  logo?: string;
};

export function Team1(props: Team1RendererProps) {
  const _ = props;

  return null;
}
