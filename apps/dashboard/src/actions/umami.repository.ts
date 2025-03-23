"use server";

import type { Result } from "@/types/result";
import type { UmamiAuth, UmamiWebsiteItem } from "./umami.definition";

export async function postLoginRepo(
  username: string,
  password: string
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
      error: "PLR: Uncatched error.",
    };
  }
}

export async function postCreateWebsiteRepo(
  bearerToken: string,
  name: string,
  domain: string,
  shareId?: string,
  teamId?: string
): Promise<Result<UmamiWebsiteItem>> {
  try {
    const res = await fetch(`${process.env.UMAMI_URL}/api/websites`, {
      method: "POST",
      body: JSON.stringify({ name, domain, shareId, teamId }),
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
      error: "PCWR: Uncatched error.",
    };
  }
}

export async function getWebsiteRepo(
  bearerToken: string,
  websiteId: string
): Promise<Result<UmamiWebsiteItem>> {
  try {
    const res = await fetch(
      `${process.env.UMAMI_URL}/api/websites/${websiteId}`,
      {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${bearerToken}`,
        },
      }
    );

    const data = (await res.json()) as UmamiWebsiteItem;

    return {
      data,
      success: true,
    };
  } catch {
    return {
      success: false,
      error: "PCWR: Uncatched error.",
    };
  }
}
