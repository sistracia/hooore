"use server";

import {
  validateProjectSchemaForm,
  type ProjectFormSchema,
  type ProjectState,
} from "./project.definition";
import { generateIdFromEntropySize } from "lucia";
import { slugifyWithCounter } from "@sindresorhus/slugify";
import { countUserProjectRepo, insertProjectRepo } from "./project.repository";

const ONE_HOUR_IN_MS = 60 * 60 * 1000;

const projectCache: Record<string, ProjectFormSchema & { ttl: number }> = {};

const projectCacheKey = (userId: string, projectId: string) => {
  return `${userId}|${projectId}`;
};

function removeProjectCache(key: string) {
  delete projectCache[key];

  for (const [key, value] of Object.entries(projectCache)) {
    if (Date.now() - value.ttl > ONE_HOUR_IN_MS) {
      delete projectCache[key];
    }
  }
}

export async function addProject(
  userId: string,
  projectId: string,
): Promise<ProjectState> {
  const slugify = slugifyWithCounter();

  const projectForm = projectCache[projectCacheKey(userId, projectId)];
  if (projectForm === undefined) {
    return {
      projectId,
      success: false,
      error: "Invalid project.",
    };
  }

  const validatedAddProjectForm = validateProjectSchemaForm({
    ...projectForm,
    id: projectId,
    domain: slugify(projectForm.business_name),
    user_id: userId,
  });

  if (validatedAddProjectForm.error !== null) {
    return {
      projectId,
      success: false,
      error: validatedAddProjectForm.error,
    };
  }

  let retryCount = 1;
  const retryMax = 5;
  let shouldRetry = false;
  let newDomainName = validatedAddProjectForm.data.domain;
  do {
    try {
      await insertProjectRepo({
        ...validatedAddProjectForm.data,
        domain: newDomainName,
      });
      removeProjectCache(projectCacheKey(userId, projectId));
      shouldRetry = false;

      return {
        success: true,
        projectId: projectId,
      };
    } catch (e) {
      newDomainName = slugify(projectForm.business_name);
      retryCount++;
      shouldRetry = true;
    }
  } while (shouldRetry && retryCount <= retryMax);

  return {
    projectId,
    success: false,
    error: "An unknown error occurred",
  };
}

export async function countUserProject(userId: string) {
  return await countUserProjectRepo(userId);
}

export async function checkProjectId(userId: string, projectId: string) {
  return projectCache[projectCacheKey(userId, projectId)] !== undefined;
}

export async function generateProjectId(userId: string) {
  const projectId = generateIdFromEntropySize(15);

  projectCache[projectCacheKey(userId, projectId)] = {
    business_logo: "",
    business_name: "",
    ttl: Date.now(),
  };

  return projectId;
}

export async function setProjectCache(
  userId: string,
  projectId: string,
  value: Partial<ProjectFormSchema>,
) {
  const projectKey = projectCacheKey(userId, projectId);
  if (projectCache[projectKey] === undefined) {
    return {
      data: undefined,
      error: "Project not found.",
    };
  }

  const newProjectCache = {
    ...projectCache[projectKey],
    ...value,
  };
  projectCache[projectKey] = newProjectCache;

  return {
    data: newProjectCache,
    error: null,
  };
}
