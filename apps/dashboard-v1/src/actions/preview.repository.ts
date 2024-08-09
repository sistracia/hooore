import { sql } from "@/lib/db";
import type { Result } from "@/types/result";
import type { PreviewSchema } from "./preview.definition";

export async function insertPagePreviewRepo(
  previewId: string,
  content: unknown,
): Promise<Result<null>> {
  try {
    // @ts-expect-error to insert JSON data to JSONB column we just need pass the object directly
    // https://github.com/porsager/postgres/issues/556#issuecomment-1433165737
    // But we get TypeScript error
    await sql`
        INSERT INTO
            preview
            (id, content)
        VALUES
            (${previewId}, ${content})
        ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content
        `;

    return { success: true, data: null };
  } catch {
    return { success: false, error: "IPPR: Uncatched error." };
  }
}

export async function getPagePreviewByIdRepo(
  previewId: string,
): Promise<Result<PreviewSchema | undefined>> {
  try {
    const [preview] = await sql<[PreviewSchema?]>`
        SELECT
            id,
            content
        FROM
            preview
        WHERE id = ${previewId}
        `;

    return { success: true, data: preview };
  } catch {
    return { success: false, error: "GPPBIR: Uncatched error." };
  }
}
