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
