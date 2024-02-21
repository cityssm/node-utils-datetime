import { dateStringToDate } from './dateStringToDate.js'
import type { DateString } from './dateTimeTypes.js'
import { dateToInteger } from './dateToInteger.js'

/**
 * Formats a date string as a number.
 * @param {DateString} dateString - A date formatted as a string (ex. '2024-12-31')
 * @returns {number} - A number representing a date.
 */
export function dateStringToInteger(dateString: DateString): number {
  return dateToInteger(dateStringToDate(dateString))
}
