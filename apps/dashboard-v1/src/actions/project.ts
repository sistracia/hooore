"use server";

import {
  validateProjectSchemaForm,
  type ProjectFormSchema,
  type ProjectState,
} from "./project.definition";
import { sql } from "@/lib/db";
import { generateIdFromEntropySize } from "lucia";
import { slugifyWithCounter } from "@sindresorhus/slugify";

export async function addProject(
  userId: string,
  projectForm: ProjectFormSchema,
): Promise<ProjectState> {
  const slugify = slugifyWithCounter();

  const validatedAddProjectForm = validateProjectSchemaForm({
    ...projectForm,
    id: generateIdFromEntropySize(15),
    domain: slugify(projectForm.business_name),
    user_id: userId,
  });

  if (validatedAddProjectForm.error !== null) {
    return {
      success: false,
      error: validatedAddProjectForm.error,
    };
  }

  const { id, business_logo, business_name, domain, user_id } =
    validatedAddProjectForm.data;

  try {
    await sql<[{ count: number }]>`
        INSERT INTO
            project
            (id, business_name, business_logo, domain, user_id)
        VALUES
            (${id}, ${business_name}, ${business_logo}, ${domain}, ${user_id})
        `;
    return {
      success: true,
      projectId: id,
    };
  } catch (e) {
    console.log(e);
    return {
      success: false,
      error: "An unknown error occurred",
    };
  }
}

export async function countUserProject(userId: string) {
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
