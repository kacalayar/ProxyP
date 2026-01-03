/**
 * Extracts device code from copilot-api auth message
 * Device codes are typically 8 characters: XXXX-XXXX format
 *
 * @param message - Raw message from copilot-api stdout
 * @returns Extracted device code or null if not found
 */
export function parseDeviceCode(message: string): string | null {
  // Pattern matches codes like "ABCD-1234" or "ABC1-DEF2"
  const pattern = /\b([A-Z0-9]{4}-[A-Z0-9]{4})\b/i;
  const match = message.match(pattern);
  return match ? match[1].toUpperCase() : null;
}
