import type { PageContent } from "./page.definition";
import type { TemplateContentContentSchema } from "./template-content.definition";

export type ProjectNavbar = Omit<
  PageContent,
  "name" | "page_slug" | "last_edited"
>;

export type ProjectNavbarSchema = {
  id: string;
  content: TemplateContentContentSchema;
  project_id: string;
  template_content_id: string;
};
