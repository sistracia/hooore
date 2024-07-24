import { google, lucia } from "@/lib/auth";
import { isPostgresError, sql } from "@/lib/db";
import { cookies } from "next/headers";
import { OAuth2RequestError } from "arctic";
import { generateId } from "lucia";

import type { User } from "@/types/user";

export async function GET(request: Request): Promise<Response> {
  const url = new URL(request.url);
  const code = url.searchParams.get("code");
  const state = url.searchParams.get("state");

  const storedState = cookies().get("state")?.value ?? null;
  const storedCodeVerifier = cookies().get("code_verifier")?.value ?? null;

  if (!code || !storedState || !storedCodeVerifier || state !== storedState) {
    return new Response(null, {
      status: 400,
    });
  }

  try {
    const tokens = await google.validateAuthorizationCode(
      code,
      storedCodeVerifier,
    );
    const googleUserResponse = await fetch(
      "https://openidconnect.googleapis.com/v1/userinfo",
      {
        headers: {
          Authorization: `Bearer ${tokens.accessToken}`,
        },
      },
    );
    const googleUser: GoogleUser = await googleUserResponse.json();
    const [existingUser] = await sql<[User?]>`
        SELECT * FROM "user" WHERE google_sub = ${googleUser.sub}
    `;

    if (existingUser) {
      const session = await lucia.createSession(existingUser.id, {});
      const sessionCookie = lucia.createSessionCookie(session.id);
      cookies().set(
        sessionCookie.name,
        sessionCookie.value,
        sessionCookie.attributes,
      );
      return new Response(null, {
        status: 302,
        headers: {
          Location: "/",
        },
      });
    }

    const userId = generateId(15);
    await sql`
        INSERT INTO "user"
            (id, google_sub, email)
        VALUES
            (${userId}, ${googleUser.sub}, ${googleUser.email})
    `;
    const session = await lucia.createSession(userId, {});
    const sessionCookie = lucia.createSessionCookie(session.id);
    cookies().set(
      sessionCookie.name,
      sessionCookie.value,
      sessionCookie.attributes,
    );
    return new Response(null, {
      status: 302,
      headers: {
        Location: "/first-setup",
      },
    });
  } catch (e) {
    console.log(e);
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
