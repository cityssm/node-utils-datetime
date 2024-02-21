import type { TimePeriodString } from './dateTimeTypes.js'

export function dateToTimePeriodString<D extends Date | undefined>(
  dateObject: D
): TimePeriodString | ''

export function dateToTimePeriodString(dateObject: Date): TimePeriodString
export function dateToTimePeriodString(dateObject: undefined): ''

/**
 * Formats a JavaScript Date as a time period string.
 * @param {Date} dateObject - A JavaScript Date object.
 * @returns {TimePeriodString} - A time string formatted with the time period (ex. 1:23 a.m.)
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
