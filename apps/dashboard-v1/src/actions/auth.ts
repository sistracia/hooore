"use server";

import { lucia, validateRequest } from "@/lib/auth";
import { sql, isPostgresError } from "@/lib/db";
import { User } from "@/types/user";
import { generateId } from "lucia";
import { cookies } from "next/headers";
import { Argon2id } from "oslo/password";
import { type AuthFormState, userSchema } from "./auth.definition";

function validateAuthForm(formData: FormData) {
  const validatedFields = userSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validatedFields.success) {
    return {
      data: null,
      error: Object.values(validatedFields.error.flatten().fieldErrors)
        .map((errors) => {
          return errors.join(", ");
        })
        .join(", "),
    };
  }

  return { data: validatedFields.data, error: null };
}

export async function loginAction(formData: FormData): Promise<AuthFormState> {
  const validatedAuthForm = validateAuthForm(formData);
  if (validatedAuthForm.error !== null) {
    return { error: validatedAuthForm.error };
  }

  const { email, password } = validatedAuthForm.data;

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

export async function signupAction(formData: FormData): Promise<AuthFormState> {
  const validatedAuthForm = validateAuthForm(formData);
  if (validatedAuthForm.error !== null) {
    return { error: validatedAuthForm.error };
  }

  const { email, password } = validatedAuthForm.data;

  const hashedPassword = await new Argon2id().hash(password);
  const userId = generateId(15);

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

export async function logoutAction(): Promise<AuthFormState> {
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
