import type { Result } from "@/types/result";
import type {
  CFResponse,
  CreateDNSRecordRequest,
  CreateDNSRecordResponse,
} from "./cloudflare.definition";

export async function createDNSRecordRepo(
  apiKey: string,
  zoneId: string,
  body: CreateDNSRecordRequest,
): Promise<Result<CFResponse<CreateDNSRecordResponse>>> {
  try {
    const res = await fetch(
      `https://api.cloudflare.com/client/v4/zones/${zoneId}/dns_records`,
      {
        method: "POST",
        headers: {
          "X-Auth-Email": apiKey,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      },
    );

    const data = (await res.json()) as CFResponse<CreateDNSRecordResponse>;
    if (!data.success) {
      return {
        success: false,
        error: data.errors
          .map((error) => {
            return error.message;
          })
          .join(", "),
      };
    }

    return {
      data,
      success: true,
    };
  } catch {
    return {
      success: false,
      error: "CDRR: Uncatched error.",
    };
  }
}
