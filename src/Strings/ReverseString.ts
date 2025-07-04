// Write a function reverse(s: string): string that returns the input string reversed.
// Example: reverse("hello") → "olleh"

export function reverse(str: String) {
  return str.split("").reverse().join("");
}
