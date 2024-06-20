import type { DateString } from '../types.js'

import { dateIntegerToDate } from './dateIntegerToDate.js'
import { dateToString } from './dateToString.js'
import { isValidDateInteger } from './isValidDateInteger.js'

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

  return dateToString(dateIntegerToDate(dateInteger) as Date)
}
