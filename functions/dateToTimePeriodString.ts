import type { TimePeriodString } from '../types.js'

export function dateToTimePeriodString(dateObject: Date): TimePeriodString
export function dateToTimePeriodString(dateObject: undefined): ''

/**
 * Formats a JavaScript Date as a time period string.
 * @param dateObject - A JavaScript Date object.
 * @returns - A time string formatted with the time period (ex. 1:23 a.m.)
 */
export function dateToTimePeriodString(
  dateObject: Date | undefined
): TimePeriodString | '' {
  if (dateObject === undefined) {
    return ''
  }

  return Intl.DateTimeFormat('en-CA', {
    hourCycle: 'h12',
    hour: 'numeric',
    minute: '2-digit'
  })
    .format(dateObject)
    .replaceAll('\u202F', ' ') as TimePeriodString
}
