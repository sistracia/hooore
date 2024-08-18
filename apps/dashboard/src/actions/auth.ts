"use server";

import { lucia, validateRequest } from "@/lib/auth";
import { generateIdFromEntropySize } from "lucia";
import { cookies } from "next/headers";
import { Argon2id } from "oslo/password";
import type { UserSchema } from "./auth.definition";
import { getUserByEmailRepo, insertUserRepo } from "./auth.repository";
import type { FuncActionState } from "@/types/result";

export async function login(user: UserSchema): Promise<FuncActionState> {
  const { email, password } = user;

  try {
    const existingUser = await getUserByEmailRepo(email);
    if (!existingUser.success) {
      return {
        success: false,
        error: existingUser.error,
      };
    }

    if (!existingUser.data) {
      return {
        success: false,
        error: "Incorrect email or password",
      };
    }

    const validPassword = await new Argon2id().verify(
      existingUser.data.password_hash,
      password,
    );
    if (!validPassword) {
      return {
        success: false,
        error: "Incorrect email or password",
      };
    }

    const session = await lucia.createSession(existingUser.data.id, {});
    const sessionCookie = lucia.createSessionCookie(session.id);
    cookies().set(
      sessionCookie.name,
      sessionCookie.value,
      sessionCookie.attributes,
    );
  } catch (e) {
    return {
      success: false,
      error: "An unknown error occurred",
    };
  }

  return {
    success: true,
    data: "",
  };
}

export async function signup(user: UserSchema): Promise<FuncActionState> {
  const { email, password } = user;

  const hashedPassword = await new Argon2id().hash(password);
  const userId = generateIdFromEntropySize(15);

  try {
    await insertUserRepo({
      email,
      id: userId,
      password: hashedPassword,
    });

    const session = await lucia.createSession(userId, {});
    const sessionCookie = lucia.createSessionCookie(session.id);
    cookies().set(
      sessionCookie.name,
      sessionCookie.value,
      sessionCookie.attributes,
    );
  } catch (e) {
    return {
      success: false,
      error: "An unknown error occurred",
    };
  }

  return {
    success: true,
    data: "",
  };
}

export async function logout(): Promise<FuncActionState> {
  const { session } = await validateRequest();
  if (!session) {
    return {
      success: false,
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
    success: true,
    data: "",
  };
}
