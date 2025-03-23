import type { User } from "@/types/user";
import { sha256 } from "@oslojs/crypto/sha2";
import { encodeBase32, encodeHexLowerCase } from "@oslojs/encoding";
import { cookies } from "next/headers";
import { cache } from "react";
import { sql } from "./db";

export async function validateSessionToken(
  token: string
): Promise<SessionValidationResult> {
  const sessionId = encodeHexLowerCase(sha256(new TextEncoder().encode(token)));
  const [row]: (Session & SessionUser)[] = await sql`
SELECT session.id, session.user_id AS "userId", session.expires_at AS "expiresAt", "user".email FROM session
INNER JOIN "user" ON session.user_id = "user".id
WHERE session.id = ${sessionId}
`;

  if (!row) {
    return { session: null, user: null };
  }

  const session: Session = {
    id: row.id,
    userId: row.userId,
    expiresAt: row.expiresAt,
  };

  const user: SessionUser = {
    email: row.email,
  };

  if (Date.now() >= session.expiresAt.getTime()) {
    await sql`"DELETE FROM session WHERE id = ${session.id}`;
    return { session: null, user: null };
  }
  if (Date.now() >= session.expiresAt.getTime() - 1000 * 60 * 60 * 24 * 15) {
    session.expiresAt = new Date(Date.now() + 1000 * 60 * 60 * 24 * 30);
    await sql`UPDATE session SET expires_at = ${session.expiresAt} WHERE session.id = ${session.id}`;
  }
  return { session, user };
}

export const getCurrentSession = cache(
  async (): Promise<SessionValidationResult> => {
    const token = (await cookies()).get("session")?.value ?? null;
    if (token === null) {
      return { session: null, user: null };
    }
    const result = validateSessionToken(token);
    return result;
  }
);

export async function invalidateSession(sessionId: string): Promise<void> {
  await sql`DELETE FROM session WHERE id = ${sessionId}`;
}

export async function invalidateUserSessions(userId: number): Promise<void> {
  await sql`DELETE FROM session WHERE user_id = ${userId}`;
}

export async function setSessionTokenCookie(
  token: string,
  expiresAt: Date
): Promise<void> {
  (await cookies()).set("session", token, {
    httpOnly: true,
    path: "/",
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    expires: expiresAt,
  });
}

export async function deleteSessionTokenCookie(): Promise<void> {
  (await cookies()).set("session", "", {
    httpOnly: true,
    path: "/",
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 0,
  });
}

export function generateSessionToken(): string {
  const tokenBytes = new Uint8Array(20);
  crypto.getRandomValues(tokenBytes);
  const token = encodeBase32(tokenBytes).toLowerCase();
  return token;
}

export async function createSession(
  token: string,
  userId: string
): Promise<Session> {
  const sessionId = encodeHexLowerCase(sha256(new TextEncoder().encode(token)));
  const session: Session = {
    id: sessionId,
    userId,
    expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30),
  };
  await sql`INSERT INTO session (id, user_id, expires_at) VALUES (${session.id}, ${session.userId}, ${session.expiresAt})`;
  return session;
}

export interface SessionUser {
  email: User["email"];
}

export interface Session {
  id: string;
  expiresAt: Date;
  userId: string;
}

type SessionValidationResult =
  | { session: Session; user: SessionUser }
  | { session: null; user: null };
