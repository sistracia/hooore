import { z } from "zod";
import type { PageContent } from "./page.definition";
import type { Result } from "@/types/result";
import { zodErrorStringify } from "./utils";

export const previewSchema = z.object({
  id: z.string(),
  content: z.record(z.string(), z.unknown()).array(),
});

export type PreviewSchema = Omit<z.infer<typeof previewSchema>, "content"> & {
  content: PageContent[];
};

export function validatePreviewSchema(schema: unknown): Result<PreviewSchema> {
  const validatedFields = previewSchema.safeParse(schema);

  if (!validatedFields.success) {
    return {
      success: false,
      error: zodErrorStringify(validatedFields.error),
    };
  }

  return { data: validatedFields.data as PreviewSchema, success: true };
}
