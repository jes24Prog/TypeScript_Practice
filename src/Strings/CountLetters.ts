// Write countLetters(s: string): { vowels: number; consonants: number }.
// Example: countLetters("TypeScript!") → { vowels: 3, consonants: 6 }

export function countLetters(str: string) {
  const stringLetter = str.toLowerCase();
  let vowelCounter: number = 0;
  let consonantCounter: number = 0;

  const vowels: string[] = ["a", "e", "i", "o", "u"];
  const strSplit: Set<string> = new Set(stringLetter.split(""));

  strSplit.forEach((s) => {
    vowels.find((v) => v === s)
      ? vowelCounter++
      : s.charCodeAt(0) >= 97 && s.charCodeAt(0) <= 122
      ? consonantCounter++
      : 0;
  });

  return "Vowels: " + vowelCounter + " " + "Consonants: " + consonantCounter;
}
