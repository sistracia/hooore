export type Result<T> =
  | { data: T; success: true }
  | { success: false; error: string };
