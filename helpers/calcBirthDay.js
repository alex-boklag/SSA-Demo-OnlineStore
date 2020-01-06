export function calcBirthDay(ms) {
  return new Date(ms).toISOString().slice(0, 10);
}