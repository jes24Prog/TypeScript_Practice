// Write isPalindrome(s: string): boolean to determine if s reads the same backwards (ignore case and non-alphanumeric).
// Example: isPalindrome("helloolleh") → true

export function isPalindrome(str: string) {
  return str.toLowerCase() === str.split("").reverse().join("").toLowerCase();
}
