// Convert to camelCase
// Write toCamelCase(s: string): string that transforms "hello world_test" into "helloWorldTest".

export function toCamelCase(str: string) {
  const separateString = str.replace("_", " ").split(" ");
  const result = separateString
    .map((s: string, i: number) => {
      return i !== 0 ? s.charAt(0).toUpperCase() + s.slice(1, s.length) : s;
    })
    .join("");
}
