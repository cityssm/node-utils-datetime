import { dateIntegerToDate } from './dateIntegerToDate.js'
import type { DateString } from './dateTimeTypes.js'
import { dateToString } from './dateToString.js'
import { isValidDateInteger } from './isValidDateInteger.js'

export function dateIntegerToString<D extends number | undefined | null>(
  dateInteger: D
): DateString | ''

export function dateIntegerToString(dateInteger: number): DateString | ''
export function dateIntegerToString(dateInteger: null | undefined | 0): ''

/**
 * Formats a date number as a string.
 * @param dateInteger - A number representing a date.
 * @returns - A string representing a date.
 */
export function dateIntegerToString(
  dateInteger: number | undefined | null
): DateString | '' {
  if (!isValidDateInteger(dateInteger)) {
    return ''
  }

  return dateToString(dateIntegerToDate(dateInteger))
}
