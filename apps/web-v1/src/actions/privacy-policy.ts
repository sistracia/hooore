import { sql } from "@/lib/db";
import type { TermAndContion } from "@/types/term-and-condition";

export async function getPrivacyPolicy() {
  const [tnc] = await sql<[TermAndContion?]>`
            SELECT
                id,
                title,
                last_updated,
                contents
            FROM privacy_policy
            LIMIT 1
        `;

  return tnc;
}
