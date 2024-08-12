import type { AvailableTemplate } from "@/types/template";
import { type DefaultError, queryOptions } from "@tanstack/react-query";

export const templateContentKeys = {
  all: () => {
    return ["template-content"] as const;
  },
  lists: () => {
    return [...templateContentKeys.all(), "list"] as const;
  },
  list: (q: string) => {
    return [...templateContentKeys.lists(), { q }] as const;
  },
};

export const templateContentOptions = queryOptions<
  AvailableTemplate,
  DefaultError,
  AvailableTemplate,
  ReturnType<(typeof templateContentKeys)[keyof typeof templateContentKeys]>
>({
  queryKey: templateContentKeys.all(),
  queryFn: async ({ queryKey }) => {
    const params = new URLSearchParams(queryKey[2]);
    const response = await fetch(`/api/template-content?${params.toString()}`);
    const data = await response.json();
    return data;
  },
});
