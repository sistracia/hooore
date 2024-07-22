import { sql } from "@/lib/db";
import type { Service } from "@/types/service";

export async function getServicesAction() {
  return await sql<
    Pick<
      Service,
      | "thumbnail_url"
      | "thumbnail_alt"
      | "background_color"
      | "title"
      | "description"
      | "items"
      | "slug"
      | "footer_images"
    >[]
  >`
            SELECT
                thumbnail_url,
                thumbnail_alt,
                background_color,
                title,
                description,
                items,
                slug,
                footer_images
            FROM service
        `;
}

export async function getServiceBySlugAction(slug: string) {
  const [service] = await sql<[Service?]>`
              SELECT
                id,
                background_color,
                thumbnail_url,
                thumbnail_alt,
                tags,
                items,
                title,
                description,
                slug,
                background_image,
                footer_images,
                contents
              FROM service
              WHERE slug = ${slug}
          `;

  return service;
}

export async function getServiceSlugsAction() {
  return await sql<Pick<Service, "slug">[]>`
              SELECT
                slug
              FROM service
          `;
}
