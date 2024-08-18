import { getPageSnippetsRepo } from "@/actions/page-content.repository";
import { getTemplateContentsRepo } from "@/actions/template-content.repository";
import { validateRequest } from "@/lib/auth";
import type { AvailableTemplate } from "@/types/template";

export async function GET(request: Request) {
  const { user } = await validateRequest();
  if (!user) {
    return new Response(JSON.stringify({ message: "Unauthorized." }), {
      status: 403,
    });
  }

  const url = new URL(request.url);
  const params = new URLSearchParams(url.search);
  const q = params.get("q") || "";

  const promised = await Promise.all([
    getTemplateContentsRepo(q),
    getPageSnippetsRepo(user.id, q),
  ]);

  // const [templateContents, pageContents] = promised;
  const [templateContents] = promised;
  const _templates = templateContents.success ? templateContents.data : [];
  const groupedTemplates = Object.groupBy(_templates, ({ name }) => {
    return name;
  });
  const templates: AvailableTemplate["templates"] = Object.entries(
    groupedTemplates,
  ).map(([key, value]) => {
    return { name: key, templates: value || [] };
  });

  const availableTemplate: AvailableTemplate = {
    templates,
    // snippets: pageContents.success ? pageContents.data : [],
    snippets: [],
  };

  return new Response(JSON.stringify(availableTemplate), {
    status: 200,
  });
}
