import { SocialProps } from "../backup-remove-later/types/social";

export type HeroSlug = "hero";

export type HeroProps = {
  background?: string;
  sub_headline?: string;
  headline?: string;
  description?: string;
  tag?: string;
  socials?: (SocialProps | undefined)[];
  meta?: string;
};
