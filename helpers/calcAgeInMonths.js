export function calcAgeInMonths(ms) {
  return Math.ceil((Date.now() - new Date(ms)) / 2592000000);
}