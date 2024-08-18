import { ZodError } from "zod";

export function zodErrorStringify(error: ZodError) {
  return Object.values(error.flatten().fieldErrors)
    .map((errors) => {
      return (errors || []).join(", ");
    })
    .join(", ");
}
