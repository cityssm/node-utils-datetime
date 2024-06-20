import type { TimePeriodString } from '../types.js'

import { dateIntegerToDate } from './dateIntegerToDate.js'
import { dateToTimePeriodString } from './dateToTimePeriodString.js'

export function timeIntegerToPeriodString(timeInteger: number): TimePeriodString
export function timeIntegerToPeriodString(timeInteger: undefined | null): ''

/**
 * Formats a time represented as a number as a string.
 * @param timeInteger - A number representing a time.
 * @returns - A string representing a time.
 */
export function timeIntegerToPeriodString(
  timeInteger: number | undefined | null
): TimePeriodString | '' {
  if (timeInteger === undefined || timeInteger === null) {
    return ''
  }

  // eslint-disable-next-line unicorn/numeric-separators-style
  return dateToTimePeriodString(dateIntegerToDate(19700101, timeInteger) as Date)
}
