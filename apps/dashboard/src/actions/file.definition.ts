import { z } from "zod";
import { zodErrorStringify } from "./utils";
import type { Result } from "@/types/result";

export const MB = 1_048_576 as const;
export const KB = 1_000 as const;

export type FileType = "LOGO" | "FAVICO";

export const logoType = ["image/jpeg", "image/png", "image/svg+xml"] as const;
export const favicotype = ["image/vnd.microsoft.icon", ...logoType] as const;

export const logoSchema = z.object({
  size: z.number().lte(5 * MB, { message: "File size maximum 5MB" }),
  type: z.enum(logoType, {
    message: "Only accept .jpeg, .png, or .svg for the file type",
  }),
});

export type LogoSchema = z.infer<typeof logoSchema>;

export function validateLogoSchema(schema: File): Result<LogoSchema> {
  const validatedFields = logoSchema.safeParse(schema);

  if (!validatedFields.success) {
    return {
      success: false,
      error: zodErrorStringify(validatedFields.error),
    };
  }

  return { data: validatedFields.data, success: true };
}

export const favicoSchema = z.object({
  size: z.number().lte(500 * KB, { message: "File size maximum 500KB" }),
  type: z.enum(favicotype, {
    message: "Only accept .ico, .jpeg, .png, or .svg for the file type",
  }),
});

export type FaveicoSchema = z.infer<typeof favicoSchema>;

export function validateFavicoSchema(schema: File): Result<FaveicoSchema> {
  const validatedFields = favicoSchema.safeParse(schema);

  if (!validatedFields.success) {
    return {
      success: false,
      error: zodErrorStringify(validatedFields.error),
    };
  }

  return { data: validatedFields.data, success: true };
}
