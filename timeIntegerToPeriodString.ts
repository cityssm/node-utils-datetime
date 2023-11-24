import { dateIntegerToDate } from './dateIntegerToDate.js'
import { dateToTimePeriodString } from './dateToTimePeriodString.js'

export function timeIntegerToPeriodString(timeInteger: number): string {
  // eslint-disable-next-line unicorn/numeric-separators-style
  return dateToTimePeriodString(dateIntegerToDate(19700101, timeInteger))
}
