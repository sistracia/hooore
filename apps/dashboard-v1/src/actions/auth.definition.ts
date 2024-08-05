import { z } from "zod";

export type AuthFormState = {
  error: string | null;
};

export const userSchema = z.object({
  email: z
    .string()
    .email({ message: "Invalid email address" })
    .min(5, { message: "Email must be 5 or more characters long" })
    .max(320, { message: "Email must be 320 or fewer characters long" }),
  password: z
    .string()
    .min(8, { message: "Password must be 8 or more characters long" })
    .max(255, { message: "Password must be 255 or more characters long" }),
});

export type UserSchema = z.infer<typeof userSchema>;

export function validateUserSchemaForm(formData: FormData) {
  const validatedFields = userSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validatedFields.success) {
    return {
      data: null,
      error: Object.values(validatedFields.error.flatten().fieldErrors)
        .map((errors) => {
          return errors.join(", ");
        })
        .join(", "),
    };
  }

  return { data: validatedFields.data, error: null };
}
