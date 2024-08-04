import { sql } from "@/lib/db";
import type { Blog } from "@repo/components-v1/backup/types/blog";

export async function getBlogsAction() {
  return await sql<Blog[]>`
            SELECT
                id,
                title,
                description,
                slug,
                thumbnail_url,
                thumbnail_alt,
                tags,
                published_date,
                viewers,
                contents
            FROM blog
        `;
}

export async function getBlogBySlugAction(slug: string) {
  const [blog] = await sql<[Blog?]>`
              SELECT
                  id,
                  title,
                  description,
                  slug,
                  thumbnail_url,
                  thumbnail_alt,
                  tags,
                  published_date,
                  viewers,
                  contents
              FROM blog
              WHERE slug = ${slug}
          `;

  return blog;
}

export async function getBlogSlugsAction() {
  return await sql<Pick<Blog, "slug">[]>`
              SELECT
                  slug
              FROM blog
          `;
}
