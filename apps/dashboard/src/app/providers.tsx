"use client";
import { QueryClientProvider } from "@tanstack/react-query";
import { getQueryClient } from "@/app/get-query-client";
import type * as React from "react";
import { addAPIProvider } from "@iconify/react/dist/iconify.js";
import { ICONIFY_API_URL } from "@/query/iconify";

addAPIProvider("", {
  resources: [ICONIFY_API_URL],
});

export default function Providers({ children }: { children: React.ReactNode }) {
  const queryClient = getQueryClient();

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
