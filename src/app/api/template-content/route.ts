import { getPageSnippetsRepo } from "@/actions/page-content.repository";
import type { TemplateContentSchema } from "@/actions/template-content.definition";
import { getTemplateContentsRepo } from "@/actions/template-content.repository";
import { validateRequest } from "@/lib/auth";
import type { AvailableTemplate } from "@/types/template";

export async function GET(request: Request) {
  const { user } = await validateRequest();
  if (!user) {
    return new Response(JSON.stringify({ message: "Unauthorized." }), {
      status: 403,
      headers: {
        "Content-Type": "application/json",
      },
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
  const groupedTemplates = _templates.reduce<
    Record<string, TemplateContentSchema[]>
  >((group, template) => {
    if (!group[template.name]) {
      group[template.name] = [];
    }

    const templates = group[template.name];
    if (templates) {
      templates.push(template);
    }

    return group;
  }, {});
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
    headers: {
      "Content-Type": "application/json",
    },
  });
}
