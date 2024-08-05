"use server";

import { lucia, validateRequest } from "@/lib/auth";
import { sql, isPostgresError } from "@/lib/db";
import { User } from "@/types/user";
import { generateIdFromEntropySize } from "lucia";
import { cookies } from "next/headers";
import { Argon2id } from "oslo/password";
import { type AuthFormState, type UserSchema } from "./auth.definition";

export async function login(user: UserSchema): Promise<AuthFormState> {
  const { email, password } = user;

  try {
    const [existingUser] = await sql<[User?]>`
      SELECT * FROM "user" WHERE email = ${email}
      `;

    if (!existingUser) {
      return {
        error: "Incorrect email or password",
      };
    }

    const validPassword = await new Argon2id().verify(
      existingUser.password_hash,
      password,
    );
    if (!validPassword) {
      return {
        error: "Incorrect email or password",
      };
    }

    const session = await lucia.createSession(existingUser.id, {});
    const sessionCookie = lucia.createSessionCookie(session.id);
    cookies().set(
      sessionCookie.name,
      sessionCookie.value,
      sessionCookie.attributes,
    );
  } catch (e) {
    if (isPostgresError(e) && e.code === "42703") {
      return {
        error: "Incorrect email or password",
      };
    }
    return {
      error: "An unknown error occurred",
    };
  }

  return {
    error: null,
  };
}

export async function signup(user: UserSchema): Promise<AuthFormState> {
  const { email, password } = user;

  const hashedPassword = await new Argon2id().hash(password);
  const userId = generateIdFromEntropySize(15);

  try {
    await sql`
            INSERT INTO "user"
                (id, email, password_hash)
            VALUES
                (${userId}, ${email}, ${hashedPassword})
        `;

    const session = await lucia.createSession(userId, {});
    const sessionCookie = lucia.createSessionCookie(session.id);
    cookies().set(
      sessionCookie.name,
      sessionCookie.value,
      sessionCookie.attributes,
    );
  } catch (e) {
    console.log(e);
    if (isPostgresError(e) && e.code === "23505") {
      return {
        error: "Email already used",
      };
    }
    return {
      error: "An unknown error occurred",
    };
  }

  return {
    error: null,
  };
}

export async function logout(): Promise<AuthFormState> {
  const { session } = await validateRequest();
  if (!session) {
    return {
      error: "Unauthorized",
    };
  }

  await lucia.invalidateSession(session.id);

  const sessionCookie = lucia.createBlankSessionCookie();
  cookies().set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes,
  );
  return {
    error: null,
  };
}
