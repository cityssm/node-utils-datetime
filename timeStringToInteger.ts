import type { TimeString } from './dateTimeTypes.js'

/**
 * Formats a string representing a time as a number.
 * @param {TimeString} timeString - A string representing a time.
 * @returns {number} - A number representing a time.
 */
export function timeStringToInteger(timeString: TimeString): number {
  return Number.parseInt(('0' + timeString).replaceAll(':', ''), 10)
}
