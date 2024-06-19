import type { DateString } from './dateTimeTypes.js'

export function dateToString<D extends Date | undefined>(
  dateObject: D
): DateString | ''

export function dateToString(dateObject: Date): DateString
export function dateToString(dateObject: undefined): ''

/**
 * Formats a JavaScript Date object as a date string.
 * @param dateObject - A JavaScript Date object
 * @returns - A date string.
 */
export function dateToString(dateObject: Date | undefined): DateString | '' {
  if (dateObject === undefined) {
    return ''
  }

  return Intl.DateTimeFormat('fr-CA', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  }).format(dateObject) as DateString
}
