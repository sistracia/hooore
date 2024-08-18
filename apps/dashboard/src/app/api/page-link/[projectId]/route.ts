import { getPagesLinkByProjectIdRepo } from "@/actions/page.repository";
import { validateRequest } from "@/lib/auth";

export async function GET(
  request: Request,
  context: { params: { projectId: string } },
) {
  const projectId = context.params.projectId;
  const { user } = await validateRequest();
  if (!user) {
    return new Response(JSON.stringify({ message: "Unauthorized." }), {
      status: 403,
    });
  }

  const url = new URL(request.url);
  const params = new URLSearchParams(url.search);
  const q = params.get("q") || "";

  const pagesLink = await getPagesLinkByProjectIdRepo(user.id, projectId, q);

  return new Response(JSON.stringify(pagesLink.success ? pagesLink.data : []), {
    status: 200,
  });
}
