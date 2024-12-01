export function randomElement<T>(array: Array<T>): T | undefined {
  return array[Math.floor(Math.random() * array.length)];
}
