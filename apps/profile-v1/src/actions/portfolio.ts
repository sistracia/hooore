import { sql } from "@/lib/db";
import type { Portfolio } from "@repo/components-v1/types/portfolio";

export async function getPortfoliosAction() {
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

export async function getPortfolioBySlugAction(slug: string) {
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

export async function getPortfolioSlugsAction() {
  return await sql<Pick<Portfolio, "slug">[]>`
        SELECT
            slug
        FROM portfolio
    `;
}
