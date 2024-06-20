import type { TimeString } from '../types.js'

/**
 * Formats a number representing a time as a string.
 * @param timeInteger - A number representing a time.
 * @returns - A string representing a time.
 */
export function timeIntegerToString(
  timeInteger: number | undefined | null
): TimeString {
  const timeString = `0000${(timeInteger ?? 0).toString()}`.slice(-4)

  return `${timeString.slice(0, 2)}:${timeString.slice(2, 4)}` as TimeString
}
