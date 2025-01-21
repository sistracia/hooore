import type { Result } from "@/types/result";

export async function notifyPublishProjectRepo(
  projectId: string,
  userId: string,
): Promise<Result<null>> {
  try {
    await fetch(
      `${process.env.GENERATOR_SERVER_URL}/api/publish/${projectId}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.GENERATOR_SERVER_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId }),
      },
    );

    return {
      data: null,
      success: true,
    };
  } catch {
    return {
      success: false,
      error: "NPPR: Uncatched error.",
    };
  }
}
