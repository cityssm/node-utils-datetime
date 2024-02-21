/**
 * yyyy-mm-dd
 */
export type DateString = `${number}-${number}-${number}`

/**
 * hh:mm
 */
export type TimeString = `${number}:${number}`

/**
 * h:mm a.m. | h:mm p.m.
 */
export type TimePeriodString = `${number}:${number} ${'a.m.' | 'p.m.'}`
