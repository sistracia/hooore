import type { AvailableTemplate } from "@/types/template";
import { type DefaultError, queryOptions } from "@tanstack/react-query";

export const iconifyKeys = {
  all: () => {
    return ["iconify"] as const;
  },
  lists: () => {
    return [...iconifyKeys.all(), "list"] as const;
  },
  list: (q: string) => {
    return [...iconifyKeys.lists(), { q }] as const;
  },
};

export const templateContentOptions = queryOptions<
  AvailableTemplate,
  DefaultError,
  AvailableTemplate,
  ReturnType<(typeof iconifyKeys)[keyof typeof iconifyKeys]>
>({
  queryKey: iconifyKeys.all(),
  queryFn: async ({ queryKey }) => {
    const params = new URLSearchParams(queryKey[2]);
    const response = await fetch(`/api/template-content?${params.toString()}`);
    const data = await response.json();
    return data;
  },
});
