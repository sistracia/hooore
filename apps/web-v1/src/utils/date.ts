export function formatD_MMMM_YYYY(str: string) {
  const date = new Date(str);
  const d = date.toLocaleString("en-EN", { day: "numeric" });
  const mmmm = date.toLocaleString("en-EN", { month: "long" });
  const yyyy = date.toLocaleString("en-EN", { year: "numeric" });
  return `${d} ${mmmm} ${yyyy}`;
}

export function formatMMMM_D__YYYY(str: string) {
  const date = new Date(str);
  const d = date.toLocaleString("en-EN", { day: "numeric" });
  const mmmm = date.toLocaleString("en-EN", { month: "long" });
  const yyyy = date.toLocaleString("en-EN", { year: "numeric" });
  return `${mmmm} ${d}, ${yyyy}`;
}
