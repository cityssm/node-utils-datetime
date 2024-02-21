import type { TimeString } from './dateTimeTypes.js'

/**
 * Formats a JavaScript Date object as a time string.
 * @param {Date} dateObject - A JavaScript Date object.
 * @returns {TimeString} - A string representing the time.
 */
export function dateToTimeString(dateObject: Date): TimeString {
  return Intl.DateTimeFormat('en-CA', {
    hourCycle: 'h24',
    hour: '2-digit',
    minute: '2-digit'
  }).format(dateObject) as TimeString
}
