"use server";

import type { Result } from "@/types/result";
import type { ProjectSchema } from "./project.definition";
import { sql } from "@/lib/db";
import type { PageSchema } from "./page.definition";
import type { ProjectNavbarSchema } from "./project-navbar.definition";
import type { PageContentSchema } from "./page-content.definition";

export async function insertProjectRepo(
  project: ProjectSchema,
  navbars: ProjectNavbarSchema[],
  pages: PageSchema[],
  pageContents: PageContentSchema[],
): Promise<Result<null>> {
  const { id, business_logo, business_name, domain, user_id } = project;

  try {
    // console.log("hi");
    await sql.begin(async (sql) => {
      await sql`
        INSERT INTO
            project
            (id, business_name, business_logo, domain, user_id)
        VALUES
            (${id}, ${business_name}, ${business_logo}, ${domain}, ${user_id})
        `;

      // @ts-expect-error to insert JSON data to JSONB column we just need pass the object directly
      // https://github.com/porsager/postgres/issues/556#issuecomment-1433165737
      // But we get TypeScript error
      await sql`INSERT INTO project_navbar ${sql(navbars, "id", "content", "project_id", "template_content_id")}`;

      await sql`INSERT INTO page ${sql(pages, "id", "name", "slug", "published", "last_edited", "create_date", "type", "project_id", "is_home")}`;

      // @ts-expect-error to insert JSON data to JSONB column we just need pass the object directly
      // https://github.com/porsager/postgres/issues/556#issuecomment-1433165737
      // But we get TypeScript error
      await sql`INSERT INTO page_content ${sql(pageContents, "id", "content", "page_id", "template_content_id", "order")}`;
    });

    return { success: true, data: null };
  } catch {
    return { success: false, error: "IPR: Uncatched error." };
  }
}

export async function getUserProjectsRepo(
  userId: string,
): Promise<Result<ProjectSchema[]>> {
  try {
    const result = await sql<ProjectSchema[]>`
        SELECT
            id,
            domain,
            user_id,
            business_name,
            business_logo
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
  userId: string,
): Promise<Result<ProjectSchema | undefined>> {
  try {
    const [project] = await sql<[ProjectSchema?]>`
          SELECT
                id,
                domain,
                user_id,
                business_name,
                business_logo,
                need_publish
          FROM project p
          WHERE p.user_id = ${userId}
          LIMIT 1
          `;

    return { success: true, data: project };
  } catch {
    return { success: false, error: "GUPR: Uncatched error." };
  }
}

export async function getProjectByIdRepo(
  projectId: string,
): Promise<Result<ProjectSchema | undefined>> {
  try {
    const [project] = await sql<[ProjectSchema?]>`
            SELECT
                  id,
                  domain,
                  user_id,
                  business_name,
                  business_logo
            FROM project
            WHERE id = ${projectId}
            `;

    return { success: true, data: project };
  } catch {
    return { success: false, error: "GPBIR: Uncatched error." };
  }
}

export async function updateProjectRepo(
  project: ProjectSchema,
): Promise<Result<null>> {
  try {
    await sql`
            UPDATE 
                project 
            SET ${sql(project, "business_name")}
            WHERE id = ${project.id}
          `;

    return { success: true, data: null };
  } catch {
    return { success: false, error: "UPR: Uncatched error." };
  }
}

export async function updateProjectPublishRepo(
  projectId: string,
  needPublish: boolean,
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
