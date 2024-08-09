import { z } from "zod";
import { zodErrorStringify } from "./utils";
import type { Result } from "@/types/result";

export const businessNameSchema = z
  .string()
  .min(1, { message: "Business name must be 1 or more characters long" })
  .max(25, { message: "Business name must be 25 or fewer characters long" })
  .regex(/^[A-Za-z0-9_.]+$/, {
    message: "Only accept business name with characters A-Z, a-z, and 0-9",
  });

export const projectFormStep1Schema = z.object({
  business_name: businessNameSchema,
});

export type ProjectFormStep1Schema = z.infer<typeof projectFormStep1Schema>;

export const projectFormStep2Schema = z.object({
  business_logo: z.string(),
});

export type ProjectFormStep2Schema = z.infer<typeof projectFormStep2Schema>;

export const projectFormSchema = projectFormStep1Schema.merge(
  projectFormStep2Schema,
);

export type ProjectFormSchema = z.infer<typeof projectFormSchema>;

export function validateProjectFormSchema(
  schema: unknown,
): Result<ProjectFormSchema> {
  const validatedFields = projectFormSchema.safeParse(schema);

  if (!validatedFields.success) {
    return {
      success: false,
      error: zodErrorStringify(validatedFields.error),
    };
  }

  return { data: validatedFields.data, success: true };
}

const MB = 1_048_576;

export const fileSchema = z.object({
  size: z.number().lte(5 * MB, { message: "File size maximum 5MB" }),
  type: z.enum(["image/jpeg", "image/png", "image/svg+xml"], {
    message: "Only accept .jpeg, .png, or .svg for the file type",
  }),
});

export type FileSchema = z.infer<typeof fileSchema>;

export function validateFileSchema(schema: unknown): Result<FileSchema> {
  const validatedFields = fileSchema.safeParse(schema);

  if (!validatedFields.success) {
    return {
      success: false,
      error: zodErrorStringify(validatedFields.error),
    };
  }

  return { data: validatedFields.data, success: true };
}

export const projectSchema = z
  .object({
    id: z.string().min(1, { message: "Project id is required" }),
    domain: z.string().min(1, { message: "Domain is required" }),
    user_id: z.string().min(1, { message: "User id is required" }),
  })
  .merge(projectFormSchema);

export type ProjectSchema = z.infer<typeof projectSchema>;

export function validateProjectSchema(schema: unknown): Result<ProjectSchema> {
  const validatedFields = projectSchema.safeParse(schema);

  if (!validatedFields.success) {
    return {
      success: false,
      error: zodErrorStringify(validatedFields.error),
    };
  }

  return { data: validatedFields.data, success: true };
}
