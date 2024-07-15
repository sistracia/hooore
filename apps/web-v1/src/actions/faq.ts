import { sql } from "@/lib/db";
import type { Paragraph } from "@/types/paragraph";

export async function getFaqsAction() {
  return await sql<Paragraph[]>`
            SELECT
                id,
                title,
                contents
            FROM faq
        `;
}
