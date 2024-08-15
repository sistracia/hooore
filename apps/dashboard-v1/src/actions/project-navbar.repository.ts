import type { Result } from "@/types/result";
import type { ProjectNavbar } from "./project-navbar.definition";
import { sql } from "@/lib/db";

export async function getProjectNavbarByProjectIdRepo(
  userId: string,
  projectId: string,
): Promise<Result<ProjectNavbar | undefined>> {
  try {
    const [navbar] = await sql<[ProjectNavbar?]>`
            SELECT
                pc.id,
                pc."content",
                tc.type,
                pc.project_id,
                tc.slug,
                tc.id template_content_id,
                tc."name" content_name,
                t.code
            FROM
                project_navbar pc
            LEFT JOIN
                project pr
                    ON pr.id = pc.project_id
            LEFT JOIN
                template_content tc
                    ON tc.id = pc.template_content_id
            LEFT JOIN
                "template" t
                    ON t.id = tc.template_id
            WHERE
                pr.id  = ${projectId}
                AND pr.user_id = ${userId}
            LIMIT 1
            `;

    return { success: true, data: navbar };
  } catch {
    return { success: false, error: "GPNBPIR: Uncatched error." };
  }
}
