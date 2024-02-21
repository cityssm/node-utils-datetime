import { dateIntegerToDate } from './dateIntegerToDate.js'
import { dateIntegerToString } from './dateIntegerToString.js'
import { dateStringToDate } from './dateStringToDate.js'
import { dateStringToInteger } from './dateStringToInteger.js'
import { dateToInteger } from './dateToInteger.js'
import { dateToString } from './dateToString.js'
import { dateToTimeInteger } from './dateToTimeInteger.js'
import { dateToTimePeriodString } from './dateToTimePeriodString.js'
import { dateToTimeString } from './dateToTimeString.js'
import { isValidDateInteger } from './isValidDateInteger.js'
import { isValidDateString } from './isValidDateString.js'
import { isValidTimeInteger } from './isValidTimeInteger.js'
import { isValidTimeString } from './isValidTimeString.js'
import { timeIntegerToPeriodString } from './timeIntegerToPeriodString.js'
import { timeIntegerToString } from './timeIntegerToString.js'
import { timeStringToInteger } from './timeStringToInteger.js'

export const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]

export const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
]

/*
 * Date Functions
 */

// To Date Object
export { dateIntegerToDate } from './dateIntegerToDate.js'
export { dateStringToDate } from './dateStringToDate.js'

// From Date Object
export { dateToInteger } from './dateToInteger.js'
export { dateToString } from './dateToString.js'

// Helpers
export { dateIntegerToString } from './dateIntegerToString.js'
export { dateStringToInteger } from './dateStringToInteger.js'

/*
 * Time Functions
 */

// From Date Object
export { dateToTimeInteger } from './dateToTimeInteger.js'
export { dateToTimeString } from './dateToTimeString.js'
export { dateToTimePeriodString } from './dateToTimePeriodString.js'

// From Time Integer
export { timeIntegerToString } from './timeIntegerToString.js'
export { timeIntegerToPeriodString } from './timeIntegerToPeriodString.js'

// From Time String
export { timeStringToInteger } from './timeStringToInteger.js'

// Types
export type {
  DateString,
  TimeString,
  TimePeriodString
} from './dateTimeTypes.js'

// Validators
export { isValidDateInteger } from './isValidDateInteger.js'
export { isValidDateString } from './isValidDateString.js'
export { isValidTimeInteger } from './isValidTimeInteger.js'
export { isValidTimeString } from './isValidTimeString.js'

export default {
  months,
  days,
  dateIntegerToDate,
  dateIntegerToString,
  dateStringToDate,
  dateToInteger,
  dateToString,
  dateStringToInteger,
  dateToTimeInteger,
  dateToTimeString,
  dateToTimePeriodString,
  isValidDateInteger,
  isValidDateString,
  isValidTimeInteger,
  isValidTimeString,
  timeIntegerToString,
  timeIntegerToPeriodString,
  timeStringToInteger
}
