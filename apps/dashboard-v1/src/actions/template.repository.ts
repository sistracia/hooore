import { sql } from "@/lib/db";
import type { TemplateSchema } from "./template.definition";
import type { Result } from "@/types/result";

export async function getTemplatesRepo(): Promise<Result<TemplateSchema[]>> {
  try {
    const result = await sql<TemplateSchema[]>`
        SELECT
            id, code, name, thumbnail_url
        FROM
            template
        `;

    return {
      success: true,
      data: result,
    };
  } catch {
    return {
      success: false,
      error: "GTR: Uncatched error.",
    };
  }
}
