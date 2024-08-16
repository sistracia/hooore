"use server";

import {
  ProjectSchema,
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
import { getPagesByProjectIdRepo } from "./page.repository";
import { getNavbarByProjectIdRepo } from "./project-navbar.repository";
import { getPageContentsByPageIdsRepo } from "./page-content.repository";
import type { PageContentSchema } from "./page-content.definition";
import type { PageSchema } from "./page.definition";

export async function addProject(
  userId: string,
  projectForm: ProjectFormSchema,
): Promise<FuncActionState> {
  const slugify = slugifyWithCounter();
  const projectId = generateIdFromEntropySize(15);

  const validatedAddProjectForm = validateProjectSchema({
    business_name: projectForm.business_name,
    business_logo: "",
    id: projectId,
    domain: slugify(projectForm.business_name),
    user_id: userId,
    need_publish: false,
  });

  if (!validatedAddProjectForm.success) {
    return validatedAddProjectForm;
  }

  const [_navbars, _pages] = await Promise.all([
    getNavbarByProjectIdRepo(projectForm.project_template_id),
    getPagesByProjectIdRepo(projectForm.project_template_id),
  ]);
  const navbars = _navbars.success ? _navbars.data : [];
  const pages = _pages.success ? _pages.data : [];

  let pageContents: PageContentSchema[] = [];
  if (pages.length !== 0) {
    const _pageContents = await getPageContentsByPageIdsRepo(
      pages.map((page) => {
        return page.id;
      }),
    );

    pageContents = _pageContents.success ? _pageContents.data : [];
  }

  const grouppedPageContents = Object.groupBy(pageContents, ({ page_id }) => {
    return page_id;
  });

  const copiedNavbars = navbars.map((navbar) => {
    return {
      ...navbar,
      id: generateIdFromEntropySize(15),
      project_id: projectId,
    };
  });

  type CopiedContent = {
    copiedPages: PageSchema[];
    copiedPageContents: PageContentSchema[];
  };

  const initialCopiedContent: CopiedContent = {
    copiedPages: [],
    copiedPageContents: [],
  };

  const copiedContent = pages.reduce<CopiedContent>((initialValue, page) => {
    const currentDate = new Date();
    const pageId = generateIdFromEntropySize(15);
    const copiedPage = {
      ...page,
      id: pageId,
      project_id: projectId,
      last_edited: currentDate,
      create_date: currentDate,
    };

    const pageContents = grouppedPageContents[page.id] || [];
    const copiedPageContents = pageContents.map((pageContent) => {
      return {
        ...pageContent,
        page_id: pageId,
        id: generateIdFromEntropySize(15),
      };
    });

    initialValue.copiedPages.push(copiedPage);
    initialValue.copiedPageContents.push(...copiedPageContents);
    return initialValue;
  }, initialCopiedContent);

  const { copiedPages, copiedPageContents } = copiedContent;

  let retryCount = 1;
  const retryMax = 5;
  let shouldRetry = false;
  let newDomainName = validatedAddProjectForm.data.domain;
  do {
    const result = await insertProjectRepo(
      {
        ...validatedAddProjectForm.data,
        domain: newDomainName,
      },
      copiedNavbars,
      copiedPages,
      copiedPageContents,
    );

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
  projectForm: ProjectSchema,
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
