import 'core-js'

export function timeStringToInteger(timeString: string): number {
  return Number.parseInt(('0' + timeString).replaceAll(':', ''), 10)
}
