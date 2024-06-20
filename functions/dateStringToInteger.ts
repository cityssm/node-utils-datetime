import type { DateString } from '../types.js'

import { dateStringToDate } from './dateStringToDate.js'
import { dateToInteger } from './dateToInteger.js'
import { isValidDateString } from './isValidDateString.js'

export function dateStringToInteger(dateString: DateString): number
export function dateStringToInteger(dateString: Omit<string, DateString> | undefined): undefined

/**
 * Formats a date string as a number.
 * @param dateString - A date formatted as a string (ex. '2024-12-31')
 * @returns - A number representing a date.
 */
export function dateStringToInteger(dateString: string): number | undefined {
  if (!isValidDateString(dateString)) {
    return undefined
  }

  return dateToInteger(dateStringToDate(dateString) as Date)
}
