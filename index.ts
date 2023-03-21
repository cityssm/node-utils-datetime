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
