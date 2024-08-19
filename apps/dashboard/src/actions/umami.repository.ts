"use server";

import type { Result } from "@/types/result";
import type { UmamiAuth, UmamiWebsiteItem } from "./umami.definition";

export async function postLogin(
  username: string,
  password: string,
): Promise<Result<UmamiAuth>> {
  try {
    const res = await fetch(`${process.env.UMAMI_URL}/api/auth/login`, {
      method: "POST",
      body: JSON.stringify({
        username,
        password,
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    const data = (await res.json()) as UmamiAuth;

    return {
      data,
      success: true,
    };
  } catch {
    return {
      success: false,
      error: "PL: Uncatched error.",
    };
  }
}

export async function postCreateWebsite(
  domain: string,
  name: string,
  bearerToken: string,
): Promise<Result<UmamiWebsiteItem>> {
  try {
    const res = await fetch(`${process.env.UMAMI_URL}/api/websites`, {
      method: "POST",
      body: JSON.stringify({ domain, name }),
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${bearerToken}`,
        "Content-Type": "application/json",
      },
    });

    const data = (await res.json()) as UmamiWebsiteItem;

    return {
      data,
      success: true,
    };
  } catch {
    return {
      success: false,
      error: "PCW: Uncatched error.",
    };
  }
}
