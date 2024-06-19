import { dateIntegerToDate } from './dateIntegerToDate.js'
import type { TimePeriodString } from './dateTimeTypes.js'
import { dateToTimePeriodString } from './dateToTimePeriodString.js'

/**
 * Formats a time represented as a number as a string.
 * @param timeInteger - A number representing a time.
 * @returns - A string representing a time.
 */
export function timeIntegerToPeriodString(
  timeInteger: number | undefined | null = 0
): TimePeriodString | '' {
  // eslint-disable-next-line unicorn/numeric-separators-style
  return dateToTimePeriodString(dateIntegerToDate(19700101, timeInteger ?? 0))
}
