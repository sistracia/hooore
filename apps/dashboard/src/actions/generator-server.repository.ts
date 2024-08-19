import type { Result } from "@/types/result";

export async function notifyPublishProject(
  projectId: string,
): Promise<Result<null>> {
  try {
    await fetch(
      `${process.env.GENERATOR_SERVER_URL}/api/publish/${projectId}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.GENERATOR_SERVER_TOKEN}`,
        },
      },
    );

    return {
      data: null,
      success: true,
    };
  } catch {
    return {
      success: false,
      error: "NPP: Uncatched error.",
    };
  }
}
