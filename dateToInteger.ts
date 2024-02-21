export function dateToInteger<T extends Date | undefined>(dateObject: T): number | undefined

export function dateToInteger(dateObject: Date): number
export function dateToInteger(dateObject: undefined): undefined

/**
 * Formats a JavaScript Date object as a number.
 * @param {Date} dateObject - A JavaScript Date object.
 * @returns {number} - A number representing the date.
 */
export function dateToInteger(
  dateObject: Date | undefined
): number | undefined {
  if (dateObject === undefined) {
    return undefined
  }

  return (
    dateObject.getFullYear() * 10_000 +
    (dateObject.getMonth() + 1) * 100 +
    dateObject.getDate()
  )
}
