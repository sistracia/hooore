export type Result<T> =
  | { data: T; success: true }
  | { success: false; error: string };

export type FuncActionState = Result<string>;
