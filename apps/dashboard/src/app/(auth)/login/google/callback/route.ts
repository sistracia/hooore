import { google } from "@/lib/auth";
import {
  createSession,
  generateSessionToken,
  setSessionTokenCookie,
} from "@/lib/session";
import { ObjectParser } from "@pilcrowjs/object-parser";
import { cookies } from "next/headers";

import { isPostgresError, sql } from "@/lib/db";
import type { User } from "@/types/user";
import { decodeIdToken, OAuth2RequestError, type OAuth2Tokens } from "arctic";
import { generateIdFromEntropySize } from "lucia";

export async function GET(request: Request): Promise<Response> {
  const url = new URL(request.url);
  const code = url.searchParams.get("code");
  const state = url.searchParams.get("state");
  const cookieStore = await cookies();
  const storedState = cookieStore.get("google_oauth_state")?.value ?? null;
  const codeVerifier = cookieStore.get("google_code_verifier")?.value ?? null;
  if (
    code === null ||
    state === null ||
    storedState === null ||
    codeVerifier === null
  ) {
    return new Response(null, {
      status: 400,
    });
  }
  if (state !== storedState) {
    return new Response(null, {
      status: 400,
    });
  }

  let tokens: OAuth2Tokens;
  try {
    tokens = await google.validateAuthorizationCode(code, codeVerifier);

    const claims = decodeIdToken(tokens.idToken());
    const claimsParser = new ObjectParser(claims);

    const googleId = claimsParser.getString("sub");
    const email = claimsParser.getString("email");

    const [existingUser] = await sql<[User?]>`
        SELECT * FROM "user" WHERE google_sub = ${googleId}
    `;

    if (existingUser) {
      const sessionToken = generateSessionToken();
      const session = await createSession(sessionToken, existingUser.id);
      await setSessionTokenCookie(sessionToken, session.expiresAt);
      return new Response(null, {
        status: 302,
        headers: {
          Location: "/",
        },
      });
    }

    const userId = generateIdFromEntropySize(15);
    await sql`
        INSERT INTO "user"
            (id, google_sub, email)
        VALUES
            (${userId}, ${googleId}, ${email})
    `;
    const sessionToken = generateSessionToken();
    const session = await createSession(sessionToken, userId);
    await setSessionTokenCookie(sessionToken, session.expiresAt);
    return new Response(null, {
      status: 302,
      headers: {
        Location: "/",
      },
    });
  } catch (e) {
    if (
      isPostgresError(e) &&
      e.code === "23505" &&
      e.constraint_name === "user_email_key"
    ) {
      return new Response(null, {
        status: 302,
        headers: {
          Location: "/oauth-error",
        },
      });
    }

    if (e instanceof OAuth2RequestError) {
      // invalid code
      return new Response(null, {
        status: 400,
      });
    }
    return new Response(null, {
      status: 500,
    });
  }
}

type GoogleUser = {
  sub: string;
  picture: string;
  email: string;
  email_verified: boolean;
};
