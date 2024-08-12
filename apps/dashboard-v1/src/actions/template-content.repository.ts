import { sql } from "@/lib/db";
import type { TemplateContentSchema } from "./template-content.definition";
import type { Result } from "@/types/result";

export async function getTemplateContentsRepo(
  search: string,
): Promise<Result<TemplateContentSchema[]>> {
  try {
    const result = await sql<TemplateContentSchema[]>`
        SELECT
            id, name, slug, content_schema as content
        FROM
            template_content
        WHERE
            name ILIKE ${search + "%"}
        `;

    return {
      success: true,
      data: result,
    };
  } catch {
    return {
      success: false,
      error: "GTCR: Uncatched error.",
    };
  }
}
