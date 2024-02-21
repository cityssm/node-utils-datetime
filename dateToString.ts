import type { DateString } from './dateTimeTypes.js'

/**
 * Formats a JavaScript Date object as a date string.
 * @param {Date} dateObject - A JavaScript Date object
 * @returns {DateString} A date string.
 */
export function dateToString(dateObject: Date): DateString {
  return Intl.DateTimeFormat('fr-CA', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  }).format(dateObject) as DateString
}
