import { sql } from "@/lib/db";
import type { Paragraph } from "@repo/components-v1/types/paragraph";

export async function getFaqsAction() {
  return await sql<Paragraph[]>`
            SELECT
                id,
                title,
                contents
            FROM faq
        `;
}
