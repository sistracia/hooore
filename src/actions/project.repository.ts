"use server";

import { sql } from "@/lib/db";
import type { Result } from "@/types/result";
import { ADMIN_ROLE } from "./contants";
import type { PageContentSchema } from "./page-content.definition";
import type { PageSchema } from "./page.definition";
import type { ProjectNavbarSchema } from "./project-navbar.definition";
import type {
  ProjectSchema,
  PublicProjectSchema,
  TemplateSchema,
} from "./project.definition";

export async function insertProjectRepo(
  project: ProjectSchema,
  navbars: ProjectNavbarSchema[],
  pages: PageSchema[],
  pageContents: PageContentSchema[]
): Promise<Result<null>> {
  try {
    await sql.begin(async (sql) => {
      await sql`
        INSERT INTO project ${sql(
          project,
          "business_logo",
          "business_name",
          "business_name_slug",
          "env",
          "id",
          "need_publish",
          "user_id",
          "title",
          "description",
          "favico",
          "custom_domain"
        )}`;

      await sql`INSERT INTO project_navbar ${sql(
        // https://github.com/porsager/postgres/issues/556#issuecomment-1433165737
        // But we get TypeScript error
        // @ts-expect-error to insert JSON data to JSONB column we just need pass the object directly
        navbars,
        "id",
        "content",
        "project_id",
        "template_content_id"
      )}`;

      await sql`INSERT INTO page ${sql(
        pages,
        "id",
        "name",
        "slug",
        "published",
        "last_edited",
        "create_date",
        "type",
        "project_id",
        "is_home"
      )}`;

      await sql`INSERT INTO page_content ${sql(
        // https://github.com/porsager/postgres/issues/556#issuecomment-1433165737
        // But we get TypeScript error
        // @ts-expect-error to insert JSON data to JSONB column we just need pass the object directly
        pageContents,
        "id",
        "content",
        "page_id",
        "template_content_id",
        "order"
      )}`;
    });

    return { success: true, data: null };
  } catch {
    return { success: false, error: "IPR: Uncatched error." };
  }
}

export async function getUserProjectsRepo(
  userId: string
): Promise<Result<PublicProjectSchema[]>> {
  try {
    const result = await sql<PublicProjectSchema[]>`
        SELECT
            id,
            user_id,
            need_publish,
            business_name,
            business_logo,
            business_name_slug
        FROM project p
        WHERE p.user_id = ${userId}
        LIMIT 1
        `;

    return { success: true, data: result };
  } catch {
    return { success: false, error: "GUPsR: Uncatched error." };
  }
}

export async function getUserProjectRepo(
  projectId: string,
  userId: string,
  withEnv = false
): Promise<Result<ProjectSchema | undefined>> {
  try {
    const [project] = await sql<[ProjectSchema?]>`
          SELECT
                id,
                user_id,
                need_publish,
                business_name,
                business_logo,
                business_name_slug,
                env,
                title,
                description,
                favico,
                custom_domain
          FROM project p
          WHERE
            p.id = ${projectId} 
            AND p.user_id = ${userId}
          `;

    return {
      success: true,
      data: project
        ? { ...project, env: withEnv ? project.env : {} }
        : undefined,
    };
  } catch {
    return { success: false, error: "GUPR: Uncatched error." };
  }
}

export async function getProjectByIdRepo(
  projectId: string,
  withEnv = false
): Promise<Result<ProjectSchema | undefined>> {
  try {
    const [project] = await sql<[ProjectSchema?]>`
            SELECT
                id,
                user_id,
                need_publish,
                env,
                business_name,
                business_logo,
                business_name_slug,
                title,
                description,
                favico,
                custom_domain
            FROM project
            WHERE id = ${projectId}
            `;

    return {
      success: true,
      data: project
        ? { ...project, env: withEnv ? project.env : {} }
        : undefined,
    };
  } catch {
    return { success: false, error: "GPBIR: Uncatched error." };
  }
}

export async function updateProjectRepo(
  project: ProjectSchema
): Promise<Result<null>> {
  try {
    await sql`
        UPDATE 
            project 
        SET ${sql(
          project,
          "business_name",
          "business_logo",
          "need_publish",
          "title",
          "description",
          "favico",
          "custom_domain"
        )}
        WHERE id = ${project.id}
    `;

    return { success: true, data: null };
  } catch {
    return { success: false, error: "UPR: Uncatched error." };
  }
}

export async function updateProjectPublishRepo(
  projectId: string,
  needPublish: boolean
): Promise<Result<null>> {
  try {
    await sql`
              UPDATE 
                  project 
              SET need_publish = ${needPublish}
              WHERE id = ${projectId}
            `;

    return { success: true, data: null };
  } catch {
    return { success: false, error: "UPrPR: Uncatched error." };
  }
}

export async function getTemplatesRepo(): Promise<Result<TemplateSchema[]>> {
  try {
    const result = await sql<TemplateSchema[]>`
        SELECT
            pr.id,
            pr.business_name,
            pr.business_name_slug,
            pr.thumbnail
        FROM
            project pr
        LEFT JOIN "user" u
            ON u.id = pr.user_id
        WHERE 
            u."role" = ${ADMIN_ROLE}
        `;

    return {
      success: true,
      data: result,
    };
  } catch {
    return {
      success: false,
      error: "GTR: Uncatched error.",
    };
  }
}

export async function updateProjectEnvRepo(
  projectId: string,
  env: Record<string, unknown>
): Promise<Result<null>> {
  try {
    // @ts-expect-error to insert JSON data to JSONB column we just need pass the object directly
    // https://github.com/porsager/postgres/issues/556#issuecomment-1433165737
    // But we get TypeScript error
    await sql` UPDATE project SET env = ${env} WHERE id = ${projectId}`;

    return { success: true, data: null };
  } catch {
    return { success: false, error: "UPER: Uncatched error." };
  }
}
