"use server";

import { isPostgresError, sql } from "@/lib/db";
import type { User } from "@/types/user";
import type { UserSchema } from "./auth.definition";
import type { Result } from "@/types/result";

export async function getUserByEmailRepo(
  email: string,
): Promise<Result<User | undefined>> {
  try {
    const [existingUser] = await sql<[User?]>`
        SELECT * FROM "user" WHERE email = ${email}
        `;
    return { data: existingUser, success: true };
  } catch {
    return { success: false, error: "GUBER: Uncatched error." };
  }
}

export async function insertUserRepo(
  user: UserSchema & { id: string },
): Promise<Result<null>> {
  const { id, email, password } = user;

  try {
    await sql`
        INSERT INTO "user"
            (id, email, password_hash)
        VALUES
            (${id}, ${email}, ${password})
        `;
    return { data: null, success: true };
  } catch (err) {
    if (isPostgresError(err) && err.code === "23505") {
      return { success: false, error: "Email already used." };
    }

    return { success: false, error: "IUR: Uncatched error." };
  }
}
