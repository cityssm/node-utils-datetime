import type { DateString, TimeString } from './dateTimeTypes.js'

/**
 * Formats a string date and time as a JavaScript Date object.
 * @param {DateString} dateString - A string representing a date.
 * @param {TimeString} timeString - A string representing a time.
 * @returns {Date} - A JavaScript Date object.
 */
export function dateStringToDate(
  dateString: DateString,
  timeString: TimeString = '00:00'
): Date {
  const datePieces = dateString.split('-')
  const timePieces = timeString.split(':')

  return new Date(
    Number.parseInt(datePieces[0], 10),
    Number.parseInt(datePieces[1], 10) - 1,
    Number.parseInt(datePieces[2], 10),
    Number.parseInt(timePieces[0], 10),
    Number.parseInt(timePieces[1], 10),
    0,
    0
  )
}
