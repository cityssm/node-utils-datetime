import { isValidDateString } from './isValidDateString.js'
import { isValidTimeString } from './isValidTimeString.js'

/**
 * Formats a string date and time as a JavaScript Date object.
 * @param dateString - A string representing a date.
 * @param timeString - A string representing a time.
 * @returns - A JavaScript Date object.
 */
export function dateStringToDate(
  dateString: string,
  timeString = '00:00'
): Date | undefined {
  if (!isValidDateString(dateString) || !isValidTimeString(timeString)) {
    return undefined
  }

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
