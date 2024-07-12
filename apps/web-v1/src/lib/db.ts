import postgres from "postgres";

export const sql = postgres(process.env.PG_URL);
