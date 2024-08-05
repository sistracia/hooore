"use server";

import { type ProjectSchema } from "./project.definition";
import { sql } from "@/lib/db";

export async function insertProjectRepo(project: ProjectSchema) {
  const { id, business_logo, business_name, domain, user_id } = project;

  await sql<[{ count: number }]>`
    INSERT INTO
        project
        (id, business_name, business_logo, domain, user_id)
    VALUES
        (${id}, ${business_name}, ${business_logo}, ${domain}, ${user_id})
    `;
}

export async function countUserProjectRepo(userId: string) {
  const result = await sql<[{ count: number }]>`
    SELECT
        COUNT(p.id) as count
    FROM project p
    LEFT JOIN "user" u 
        ON p.user_id = u.id
    WHERE u.id = ${userId}
    `;

  return Number(result[0].count);
}
