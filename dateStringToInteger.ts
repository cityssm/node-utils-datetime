import { dateStringToDate } from './dateStringToDate.js'
import { dateToInteger } from './dateToInteger.js'
import { isValidDateString } from './isValidDateString.js'

/**
 * Formats a date string as a number.
 * @param dateString - A date formatted as a string (ex. '2024-12-31')
 * @returns - A number representing a date.
 */
export function dateStringToInteger(dateString: string): number | undefined {
  if (!isValidDateString(dateString)) {
    return undefined
  }

  return dateToInteger(dateStringToDate(dateString))
}
