import type { PageLink } from "@/actions/page.definition";
import {
  type DefaultError,
  useQuery,
  type UseQueryOptions,
} from "@tanstack/react-query";

export const pageLinkKeys = {
  all: () => {
    return ["page-link"] as const;
  },
  lists: (projectId: string) => {
    return [...pageLinkKeys.all(), "list", projectId] as const;
  },
  list: (projectId: string, params: { q: string }) => {
    return [...pageLinkKeys.lists(projectId), params] as const;
  },
};

export function usePageLinks(
  projectId: Parameters<(typeof pageLinkKeys)["list"]>[0],
  queryParams: Parameters<(typeof pageLinkKeys)["list"]>[1],
  options?: Omit<
    UseQueryOptions<
      PageLink[],
      DefaultError,
      PageLink[],
      ReturnType<(typeof pageLinkKeys)[keyof typeof pageLinkKeys]>
    >,
    "queryKey" | "queryFn"
  >,
) {
  return useQuery({
    queryKey: pageLinkKeys.list(projectId, queryParams),
    queryFn: async ({ queryKey }) => {
      const projectId = queryKey[2];
      const params = new URLSearchParams(queryKey[3]);
      const response = await fetch(
        `/api/page-link/${projectId}?${params.toString()}`,
      );
      const data = await response.json();
      return data;
    },
    ...options,
  });
}
