import type { Result } from "@/types/result";
import type { ProjectMetaSchema } from "./project-meta.definition";
import { sql } from "@/lib/db";

export async function getMetaByProjectIdRepo(
  projectId: string,
): Promise<Result<ProjectMetaSchema[]>> {
  try {
    const metas = await sql<ProjectMetaSchema[]>`
        SELECT
            id,
            type,
            content,
            project_id
        FROM
            project_meta
        WHERE
            project_id  = ${projectId}
        `;
    return { success: true, data: metas };
  } catch {
    return { success: false, error: "GMBPIR: Uncatched error." };
  }
}
