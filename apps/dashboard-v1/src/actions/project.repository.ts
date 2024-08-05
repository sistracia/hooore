"use server";

import { Result } from "@/types/result";
import { type ProjectSchema } from "./project.definition";
import { sql } from "@/lib/db";

export async function insertProjectRepo(
  project: ProjectSchema,
): Promise<Result<null>> {
  const { id, business_logo, business_name, domain, user_id } = project;

  try {
    await sql<[{ count: number }]>`
        INSERT INTO
            project
            (id, business_name, business_logo, domain, user_id)
        VALUES
            (${id}, ${business_name}, ${business_logo}, ${domain}, ${user_id})
        `;

    return { success: true, data: null };
  } catch {
    return { success: false, error: "IPR: Uncatched error." };
  }
}

export async function countUserProjectRepo(
  userId: string,
): Promise<Result<number>> {
  try {
    const result = await sql<[{ count: number }]>`
        SELECT
            COUNT(p.id) as count
        FROM project p
            LEFT JOIN "user" u 
                ON p.user_id = u.id
        WHERE u.id = ${userId}
        `;

    return { success: true, data: Number(result[0].count) };
  } catch {
    return { success: false, error: "CUPR: Uncatched error." };
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
                business_logo
          FROM project p
          WHERE p.user_id = ${userId}
          `;

    return { success: true, data: project };
  } catch {
    return { success: false, error: "GUPR: Uncatched error." };
  }
}
