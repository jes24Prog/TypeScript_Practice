// Implement `replaceAll(s: string, find: string, replaceWith: string): string` without using built-in `replaceAll`.

export function replaceAll(
  str: string,
  find: string,
  replaceWith: string
): any {
  if (!find) return str;
  return str.split(find).join(replaceWith);
}
