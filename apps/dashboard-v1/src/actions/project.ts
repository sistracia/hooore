"use server";

import {
  validateProjectSchema,
  type ProjectFormSchema,
} from "./project.definition";
import { generateIdFromEntropySize } from "lucia";
import { slugifyWithCounter } from "@sindresorhus/slugify";
import {
  getProjectByIdRepo,
  insertProjectRepo,
  updateProjectPublishRepo,
  updateProjectRepo,
} from "./project.repository";
import type { FuncActionState } from "@/types/result";

export async function addProject(
  userId: string,
  projectForm: ProjectFormSchema,
): Promise<FuncActionState> {
  const slugify = slugifyWithCounter();
  const projectId = generateIdFromEntropySize(15);

  const validatedAddProjectForm = validateProjectSchema({
    ...projectForm,
    id: projectId,
    domain: slugify(projectForm.business_name),
    user_id: userId,
    need_publish: false,
  });

  if (!validatedAddProjectForm.success) {
    return validatedAddProjectForm;
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
      newDomainName = slugify(projectForm.business_name);
      retryCount++;
      shouldRetry = true;
      continue;
    }

    shouldRetry = false;

    return {
      success: true,
      data: projectId,
    };
  } while (shouldRetry && retryCount <= retryMax);

  return {
    success: false,
    error: "An unknown error occurred",
  };
}

export async function updateProject(
  projectId: string,
  projectForm: ProjectFormSchema,
): Promise<FuncActionState> {
  const project = await getProjectByIdRepo(projectId);
  if (!project.success) {
    return project;
  }

  if (!project.data) {
    return {
      success: false,
      error: "Project not found.",
    };
  }

  // TODO: for later if any web configuration change
  const needPublish =
    project.data.domain !== project.data.domain ||
    project.data.business_logo !== project.data.business_logo;

  const validatedAddProjectForm = validateProjectSchema({
    ...project.data,
    ...projectForm,
    need_publish: needPublish,
  });

  if (!validatedAddProjectForm.success) {
    return validatedAddProjectForm;
  }

  const result = await updateProjectRepo(validatedAddProjectForm.data);
  if (!result.success) {
    return result;
  }

  return {
    success: true,
    data: projectId,
  };
}

export async function publishProject(
  projectId: string,
): Promise<FuncActionState> {
  const project = await getProjectByIdRepo(projectId);
  if (!project.success) {
    return project;
  }

  if (!project.data) {
    return {
      success: false,
      error: "Project not found.",
    };
  }

  await updateProjectPublishRepo(project.data.id, false);

  return {
    success: true,
    data: "",
  };
}
