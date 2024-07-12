import { sql } from "@/lib/db";
import type { TermAndContion } from "@/types/term-and-condition";

export async function getTermAndCondition() {
  const [tnc] = await sql<[TermAndContion?]>`
            SELECT
                id,
                title,
                last_updated,
                contents
            FROM term_and_condition
            LIMIT 1
        `;

  return tnc;
}
