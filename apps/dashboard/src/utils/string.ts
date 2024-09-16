/**
 * Ref: https://stackoverflow.com/a/8084248/12976234
 */
export function randomString() {
  return (Math.random() + 1).toString(36).substring(2);
}

export function kebabCaseToTitleCase(str: string = "") {
  return str
    .split("-")
    .map((word) => {
      return word[0]?.toUpperCase() + word.substring(1).toLowerCase();
    })
    .join(" ");
}
