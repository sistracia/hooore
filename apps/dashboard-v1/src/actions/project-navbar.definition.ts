import type { PageContent } from "./page.definition";

export type ProjectNavbar = Omit<
  PageContent,
  "name" | "page_slug" | "last_edited"
>;
