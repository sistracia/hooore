"use server";

import type { FuncActionState } from "@/types/result";
import { slugifyWithCounter } from "@sindresorhus/slugify";
import { generateIdFromEntropySize } from "lucia";
import { notifyPublishProjectRepo } from "./generator-server.repository";
import type { PageContentSchema } from "./page-content.definition";
import { getPageContentsByPageIdsRepo } from "./page-content.repository";
import type { PageSchema } from "./page.definition";
import { getPagesByProjectIdRepo } from "./page.repository";
import { getMetaByProjectIdRepo } from "./project-meta.repository";
import { getNavbarByProjectIdRepo } from "./project-navbar.repository";
import {
  validateProjectSchema,
  type ProjectFormSchema,
  type ProjectSettingSchema,
} from "./project.definition";
import {
  getProjectByIdRepo,
  insertProjectRepo,
  updateProjectEnvRepo,
  updateProjectPublishRepo,
  updateProjectRepo,
} from "./project.repository";
import { postCreateWebsiteRepo, postLoginRepo } from "./umami.repository";

export async function addProject(
  userId: string,
  projectForm: ProjectFormSchema
): Promise<FuncActionState> {
  const slugify = slugifyWithCounter();
  const projectId = generateIdFromEntropySize(15);

  const validatedAddProjectForm = validateProjectSchema({
    business_name: projectForm.business_name,
    business_name_slug: slugify(projectForm.business_name),
    business_logo: projectForm.business_logo,
    id: projectId,
    user_id: userId,
    need_publish: true,
    env: {},
  });

  if (!validatedAddProjectForm.success) {
    return validatedAddProjectForm;
  }

  const [_navbars, _pages, _metas] = await Promise.all([
    getNavbarByProjectIdRepo(projectForm.project_template_id),
    getPagesByProjectIdRepo(projectForm.project_template_id),
    getMetaByProjectIdRepo(projectForm.project_template_id),
  ]);
  const navbars = _navbars.success ? _navbars.data : [];
  const pages = _pages.success ? _pages.data : [];
  const metas = _metas.success ? _metas.data : [];

  const copiedMetas = metas.map((meta) => {
    return {
      ...meta,
      id: generateIdFromEntropySize(15),
      project_id: projectId,
    };
  });

  const copiedNavbars = navbars.map((navbar) => {
    return {
      ...navbar,
      id: generateIdFromEntropySize(15),
      project_id: projectId,
    };
  });

  let pageContents: PageContentSchema[] = [];
  if (pages.length !== 0) {
    const _pageContents = await getPageContentsByPageIdsRepo(
      pages.map((page) => {
        return page.id;
      })
    );

    pageContents = _pageContents.success ? _pageContents.data : [];
  }

  const grouppedPageContents = pageContents.reduce<
    Record<string, PageContentSchema[]>
  >((group, pageContent) => {
    if (!group[pageContent.page_id]) {
      group[pageContent.page_id] = [];
    }

    const pageContents = group[pageContent.page_id];
    if (pageContents) {
      pageContents.push(pageContent);
    }

    return group;
  }, {});

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
  let newBusinessNameSlug = validatedAddProjectForm.data.business_name_slug;
  do {
    const result = await insertProjectRepo(
      {
        ...validatedAddProjectForm.data,
        business_name_slug: newBusinessNameSlug,
      },
      copiedMetas,
      copiedNavbars,
      copiedPages,
      copiedPageContents
    );

    if (!result.success) {
      newBusinessNameSlug = slugify(
        `${projectForm.business_name}-${retryCount}`
      );
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
  projectSetting: ProjectSettingSchema
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

  // if any web configuration changes, then need to re-publish project to apply changes
  const needPublish =
    project.data.need_publish ||
    projectSetting.business_logo !== project.data.business_logo ||
    // For now, make it always need to publish
    true;

  const validatedAddProjectForm = validateProjectSchema({
    ...project.data,
    ...projectSetting,
    need_publish: needPublish,
  });

  if (!validatedAddProjectForm.success) {
    return validatedAddProjectForm;
  }

  const meta = projectSetting.metas[0];
  const tileMeta = meta?.title || "";
  const descriptionMeta = meta?.description || "";
  const favicoMeta = meta?.favico || "";

  const result = await updateProjectRepo(validatedAddProjectForm.data, [
    {
      id: generateIdFromEntropySize(15),
      project_id: project.data.id,
      type: "title",
      content: tileMeta,
    },
    {
      id: generateIdFromEntropySize(15),
      project_id: project.data.id,
      type: "description",
      content: descriptionMeta,
    },
    {
      id: generateIdFromEntropySize(15),
      project_id: project.data.id,
      type: "favico",
      content: favicoMeta,
    },
  ]);
  if (!result.success) {
    return result;
  }

  return {
    success: true,
    data: projectId,
  };
}

export async function publishProject(
  projectId: string
): Promise<FuncActionState> {
  const project = await getProjectByIdRepo(projectId, true);
  if (!project.success) {
    return project;
  }

  if (!project.data) {
    return {
      success: false,
      error: "Project not found.",
    };
  }

  let newEnv = project.data.env;
  if (!project.data.env.NEXT_PUBLIC_UMAMI_ID) {
    const umamiAuth = await postLoginRepo(
      process.env.UMAMI_USERNAME,
      process.env.UMAMI_PASSWORD
    );
    if (!umamiAuth.success) {
      return umamiAuth;
    }

    const shareId = generateIdFromEntropySize(15);
    const umamiWebsite = await postCreateWebsiteRepo(
      umamiAuth.data.token,
      project.data.business_name,
      `${project.data.business_name_slug}.${process.env.MAIN_HOST_DOMAIN}`,
      shareId
    );
    if (!umamiWebsite.success) {
      return umamiWebsite;
    }

    newEnv = { ...newEnv, NEXT_PUBLIC_UMAMI_ID: umamiWebsite.data.id };
    await updateProjectEnvRepo(projectId, newEnv);
  }

  const notifiedPublishProject = await notifyPublishProjectRepo(
    project.data.id,
    project.data.user_id
  );
  if (!notifiedPublishProject.success) {
    return notifiedPublishProject;
  }

  const updatedProject = await updateProjectPublishRepo(project.data.id, false);
  if (!updatedProject.success) {
    return updatedProject;
  }

  return {
    success: true,
    data: "",
  };
}
