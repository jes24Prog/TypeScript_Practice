// Validate email format
// Write isValidEmail(email: string): boolean using a regular expression to enforce local@domain.tld.

export function isValidEmail(email: string) {
  const parts = email.split("@");
  const [local, domain] = parts;

  if (!local || !domain) return false;

  const domainParts = domain.split(".");

  if (domainParts.length < 2) return false;

  for (const part of domainParts) {
    if (!part) return false;
  }

  return true;
}
