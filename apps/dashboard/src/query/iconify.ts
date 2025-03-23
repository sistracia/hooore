import {
  type DefaultError,
  useQuery,
  type UseQueryOptions,
} from "@tanstack/react-query";

export const ICONIFY_API_URL = process.env.NEXT_PUBLIC_ICONIFY_API_URL;

export const iconifyKeys = {
  all: () => {
    return ["iconify"] as const;
  },
  lists: () => {
    return [...iconifyKeys.all(), "list"] as const;
  },
  list: (params: { q: string }) => {
    return [...iconifyKeys.lists(), params] as const;
  },
};

export function useIconifyIcons(
  queryParams: Parameters<(typeof iconifyKeys)["list"]>[0],
  options?: Omit<
    UseQueryOptions<
      string[],
      DefaultError,
      string[],
      [string, ...ReturnType<(typeof iconifyKeys)[keyof typeof iconifyKeys]>]
    >,
    "queryKey" | "queryFn"
  >,
) {
  return useQuery({
    queryKey: [ICONIFY_API_URL, ...iconifyKeys.list(queryParams)],
    queryFn: async ({ queryKey }) => {
      const queryParams = queryKey[3];
      const params = new URLSearchParams(
        queryParams ? { query: queryParams.q, pretty: "1" } : undefined,
      );
      // if ()
      const response = await fetch(
        `${ICONIFY_API_URL}/search?${params.toString()}`,
      );
      const data = (await response.json()) as { icons: string[] };
      return data.icons;
    },
    ...options,
  });
}
