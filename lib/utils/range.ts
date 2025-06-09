/**
 * Generates an array of numbers in a range
 * @param start - The start of the range
 * @param end - The end of the range
 * @returns The array of numbers in the range
 */
export function range(start: number, end: number): number[] {
  return Array.from({ length: end - start + 1 }, (_, i) => start + i);
}
