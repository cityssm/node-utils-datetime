import type { TimeString } from '../types.js'

export function dateToTimeString(dateObject: Date): TimeString
export function dateToTimeString(dateObject: undefined): ''

/**
 * Formats a JavaScript Date object as a time string.
 * @param dateObject - A JavaScript Date object.
 * @returns - A string representing the time.
 */
export function dateToTimeString(
  dateObject: Date | undefined
): TimeString | '' {
  if (dateObject === undefined) {
    return ''
  }

  return Intl.DateTimeFormat('en-CA', {
    hourCycle: 'h24',
    hour: '2-digit',
    minute: '2-digit'
  }).format(dateObject) as TimeString
}
