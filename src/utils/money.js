/** "Item total: $39.98" -> 39.98 */
export function parseMoney(text) {
  const match = text.match(/\$([\d,]+\.\d{2})/);
  if (!match) throw new Error(`No dollar amount found in "${text}"`);
  return Number(match[1].replace(/,/g, ''));
}

/** 9.99 -> "$9.99" */
export function formatPrice(amount) {
  return `$${amount.toFixed(2)}`;
}

/** Sums in cents, because 29.99 + 9.99 is not exactly 39.98 in JavaScript. */
export function sumPrices(amounts) {
  return amounts.reduce((total, amount) => total + Math.round(amount * 100), 0) / 100;
}