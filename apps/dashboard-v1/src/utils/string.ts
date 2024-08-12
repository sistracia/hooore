/**
 * Ref: https://stackoverflow.com/a/8084248/12976234
 */
export function randomString() {
  return (Math.random() + 1).toString(36).substring(2);
}
