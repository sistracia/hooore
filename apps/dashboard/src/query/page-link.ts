import type { PageLink } from "@/actions/page.definition";
import { type DefaultError, queryOptions } from "@tanstack/react-query";

export const pageLinkKeys = {
  all: () => {
    return ["page-link"] as const;
  },
  lists: (projectId: string) => {
    return [...pageLinkKeys.all(), "list", projectId] as const;
  },
  list: (projectId: string, q: string) => {
    return [...pageLinkKeys.lists(projectId), { q }] as const;
  },
};

export const pageLinkOptions = queryOptions<
  PageLink[],
  DefaultError,
  PageLink[],
  ReturnType<(typeof pageLinkKeys)[keyof typeof pageLinkKeys]>
>({
  queryKey: pageLinkKeys.all(),
  queryFn: async ({ queryKey }) => {
    const projectId = queryKey[2];
    const params = new URLSearchParams(queryKey[3]);
    const response = await fetch(
      `/api/page-link/${projectId}?${params.toString()}`,
    );
    const data = await response.json();
    return data;
  },
});
