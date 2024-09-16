import type { AvailableTemplate } from "@/types/template";
import {
  type DefaultError,
  useQuery,
  type UseQueryOptions,
} from "@tanstack/react-query";

export const templateContentKeys = {
  all: () => {
    return ["template-content"] as const;
  },
  lists: () => {
    return [...templateContentKeys.all(), "list"] as const;
  },
  list: (params: { q: string }) => {
    return [...templateContentKeys.lists(), params] as const;
  },
};

export function useTemplateContents(
  queryParams: Parameters<(typeof templateContentKeys)["list"]>[0],
  options?: Omit<
    UseQueryOptions<
      AvailableTemplate,
      DefaultError,
      AvailableTemplate,
      ReturnType<(typeof templateContentKeys)[keyof typeof templateContentKeys]>
    >,
    "queryKey" | "queryFn"
  >,
) {
  return useQuery({
    queryKey: templateContentKeys.list(queryParams),
    queryFn: async ({ queryKey }) => {
      const params = new URLSearchParams(queryKey[2]);
      const response = await fetch(
        `/api/template-content?${params.toString()}`,
      );
      const data = await response.json();
      return data;
    },
    ...options,
  });
}
