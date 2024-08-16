import { PageContent } from "@repo/components-v1/types/page-content";
import { sql } from "@/lib/db";

export async function getNavbarByProjectIdRepo(projectId: string) {
  const navbars = await sql<PageContent[]>`
            SELECT
                pc.id,
                pc."content",
                tc.slug
            FROM
                project_navbar pc
            LEFT JOIN
                template_content tc
                    ON tc.id = pc.template_content_id
            LEFT JOIN
                project pr
                    ON pr.id = pc.project_id
            WHERE
                pr.id  = ${projectId}
            LIMIT 1
            `;

  return navbars;
}
