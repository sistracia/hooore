"use server";

import { sql } from "@/lib/db";
import { type User } from "@/types/user";
import { type UserSchema } from "./auth.definition";

export async function getUserByEmailRepo(email: string) {
  const [existingUser] = await sql<[User?]>`
    SELECT * FROM "user" WHERE email = ${email}
    `;
  return existingUser;
}

export async function insertUserRepo(user: UserSchema & { id: string }) {
  const { id, email, password } = user;

  await sql`
  INSERT INTO "user"
      (id, email, password_hash)
  VALUES
      (${id}, ${email}, ${password})
`;
}
