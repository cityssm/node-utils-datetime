import { dateIntegerToDate } from './dateIntegerToDate.js'
import type { TimePeriodString } from './dateTimeTypes.js'
import { dateToTimePeriodString } from './dateToTimePeriodString.js'

/**
 * Formats a time represented as a number as a string.
 * @param {number} timeInteger - A number representing a time.
 * @returns {TimePeriodString} - A string representing a time.
 */
export function timeIntegerToPeriodString(
  timeInteger = 0
): TimePeriodString | '' {
  // eslint-disable-next-line unicorn/numeric-separators-style
  return dateToTimePeriodString(dateIntegerToDate(19700101, timeInteger))
}
