export function timeIntegerToString(timeInteger: number): string {
  const timeString = ('0000' + (timeInteger || 0).toString()).slice(-4)
  return timeString.slice(0, 2) + ':' + timeString.slice(2, 4)
}
