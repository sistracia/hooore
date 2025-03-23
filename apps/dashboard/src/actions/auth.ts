"use server";

import {
  createSession,
  deleteSessionTokenCookie,
  generateSessionToken,
  getCurrentSession,
  invalidateSession,
  setSessionTokenCookie,
} from "@/lib/session";
import type { FuncActionState } from "@/types/result";
import { hash, verify } from "@node-rs/argon2";
import { generateIdFromEntropySize } from "lucia";
import type { UserSchema } from "./auth.definition";
import { getUserByEmailRepo, insertUserRepo } from "./auth.repository";

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

    const validPassword = await verify(
      existingUser.data.password_hash,
      password
    );
    if (!validPassword) {
      return {
        success: false,
        error: "Incorrect email or password",
      };
    }

    const sessionToken = generateSessionToken();
    const session = await createSession(sessionToken, existingUser.data.id);
    await setSessionTokenCookie(sessionToken, session.expiresAt);
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

  const hashedPassword = await hash(password);
  const userId = generateIdFromEntropySize(15);

  try {
    await insertUserRepo({
      email,
      id: userId,
      password: hashedPassword,
    });

    const sessionToken = generateSessionToken();
    const session = await createSession(sessionToken, userId);
    await setSessionTokenCookie(sessionToken, session.expiresAt);
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
  const { session } = await getCurrentSession();
  if (!session) {
    return {
      success: false,
      error: "Unauthorized",
    };
  }

  await invalidateSession(session.id);
  await deleteSessionTokenCookie();
  return {
    success: true,
    data: "",
  };
}
