"use server";

import {
  validateProjectSchema,
  type ProjectFormSchema,
  type ProjectState,
} from "./project.definition";
import { generateIdFromEntropySize } from "lucia";
import { slugifyWithCounter } from "@sindresorhus/slugify";
import { insertProjectRepo } from "./project.repository";

export async function addProject(
  userId: string,
  project: ProjectFormSchema,
): Promise<ProjectState> {
  const slugify = slugifyWithCounter();
  const projectId = generateIdFromEntropySize(15);

  const validatedAddProjectForm = validateProjectSchema({
    ...project,
    id: projectId,
    domain: slugify(project.business_name),
    user_id: userId,
  });

  if (!validatedAddProjectForm.success) {
    return {
      success: false,
      error: validatedAddProjectForm.error,
    };
  }

  let retryCount = 1;
  const retryMax = 5;
  let shouldRetry = false;
  let newDomainName = validatedAddProjectForm.data.domain;
  do {
    const result = await insertProjectRepo({
      ...validatedAddProjectForm.data,
      domain: newDomainName,
    });

    if (!result.success) {
      newDomainName = slugify(project.business_name);
      retryCount++;
      shouldRetry = true;
      continue;
    }

    shouldRetry = false;

    return {
      success: true,
      projectId: projectId,
    };
  } while (shouldRetry && retryCount <= retryMax);

  return {
    success: false,
    error: "An unknown error occurred",
  };
}
