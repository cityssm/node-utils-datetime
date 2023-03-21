export function timeStringToInteger(timeString: string): number {
  return Number.parseInt(('0' + timeString).replace(/:/g, ''), 10)
}
