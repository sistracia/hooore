import { sql } from "@/lib/db";
import type { Portfolio } from "@/types/portfolio";

export async function getPortfolios() {
  return await sql<Portfolio[]>`
            SELECT
                id,
                title,
                description,
                slug,
                thumbnail_url,
                thumbnail_alt,
                tags,
                contents
            FROM portfolio
        `;
}

export async function getPortfolioBySlug(slug: string) {
  const [portfolio] = await sql<[Portfolio?]>`
              SELECT
                  id,
                  title,
                  description,
                  slug,
                  thumbnail_url,
                  thumbnail_alt,
                  tags,
                  contents
              FROM portfolio
              WHERE slug = ${slug}
          `;

  return portfolio;
}
