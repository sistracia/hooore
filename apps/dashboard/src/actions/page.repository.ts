import type { Result } from "@/types/result";
import type { PageContent, PageLink, PageSchema } from "./page.definition";
import { sql } from "@/lib/db";
import { NAVIGATION_TYPE, NOT_PAGE_TYPE } from "./contants";

export async function getProjectPagesRepo(
  userId: string,
  projectId: string,
): Promise<Result<PageSchema[]>> {
  try {
    const pages = await sql<[PageSchema]>`
            SELECT
                p.id,
                p.name,
                p.slug,
                p.published,
                p.last_edited,
                p.create_date,
                p.type,
                p.project_id,
                p.is_home
            FROM
                page p
            LEFT JOIN
                project pr
                    ON pr.id = p.project_id
            WHERE
                p.project_id = ${projectId}
                AND pr.user_id = ${userId}
                AND type != ${NOT_PAGE_TYPE}
            ORDER BY create_date ASC
          `;

    return { success: true, data: pages };
  } catch {
    return { success: false, error: "GPPR: Uncatched error." };
  }
}

export async function getPageContentsByIdRepo(
  userId: string,
  projectId: string,
  pageId: string,
): Promise<Result<PageContent[]>> {
  try {
    const pageContents = await sql<PageContent[]>`
            SELECT
                pc.id,
                pc."content",
                tc.type,
                p.project_id,
                p."name",
                p.slug as page_slug,
                p.last_edited,
                tc.slug,
                tc.id template_content_id,
                tc."name" content_name,
                tc.code
            FROM
                page_content pc
            LEFT JOIN
                page p
                    ON p.id = pc.page_id 
            LEFT JOIN
                project pr
                    ON pr.id = p.project_id
            LEFT JOIN
                template_content tc
                    ON tc.id = pc.template_content_id
            WHERE
                (p.id = ${pageId} OR tc.type = ${NAVIGATION_TYPE}) 
                AND pr.id  = ${projectId}
                AND pr.user_id = ${userId}
            ORDER BY pc."order" ASC
            `;

    return { success: true, data: pageContents };
  } catch {
    return { success: false, error: "GPCBIR: Uncatched error." };
  }
}

export async function getPagesLinkByProjectIdRepo(
  userId: string,
  projectId: string,
  q: string,
): Promise<Result<PageLink[]>> {
  try {
    const pagesLink = await sql<PageLink[]>`
            SELECT
                  p.id,
                  p.name,
                  p.slug
            FROM
                  page p
            LEFT JOIN
                project pr
                    ON pr.id = p.project_id
            WHERE 
                p.type != ${NOT_PAGE_TYPE}
                AND p.project_id = ${projectId}
                AND pr.user_id = ${userId}
                AND (name ILIKE ${q + "%"} OR slug ILIKE ${q + "%"})
            `;

    return { success: true, data: pagesLink };
  } catch {
    return { success: false, error: "GPLBPIR: Uncatched error." };
  }
}

export async function updatePagePublishRepo(
  pageId: string,
  published: boolean,
): Promise<Result<null>> {
  try {
    await sql`
            UPDATE 
                page 
            SET
                published = ${published}
            WHERE id = ${pageId}
            `;

    return { success: true, data: null };
  } catch {
    return { success: false, error: "UPPR: Uncatched error." };
  }
}

export async function getPagesByProjectIdRepo(
  projectId: string,
): Promise<Result<PageSchema[]>> {
  try {
    const pages = await sql<[PageSchema]>`
            SELECT
                p.id,
                p.name,
                p.slug,
                p.published,
                p.last_edited,
                p.create_date,
                p.type,
                p.project_id,
                p.is_home
            FROM
                page p
            LEFT JOIN
                project pr
                    ON pr.id = p.project_id
            WHERE
                p.project_id = ${projectId}
            ORDER BY create_date ASC
            `;

    return { success: true, data: pages };
  } catch {
    return { success: false, error: "GPBPIR: Uncatched error." };
  }
}
