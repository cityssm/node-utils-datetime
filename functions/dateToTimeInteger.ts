export function dateToTimeInteger<D extends Date | undefined>(
  dateObject: D
): number | undefined

export function dateToTimeInteger(dateObject: Date): number
export function dateToTimeInteger(dateObject: undefined): undefined

/**
 * Formats the time in a JavaScript Date as a number.
 * @param dateObject - A JavaScript Date object.
 * @returns - A number representing a time.
 */
export function dateToTimeInteger(
  dateObject: Date | undefined
): number | undefined {
  if (dateObject === undefined) {
    return undefined
  }

  return dateObject.getHours() * 100 + dateObject.getMinutes()
}
