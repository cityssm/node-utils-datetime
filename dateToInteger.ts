/**
 * Formats a JavaScript Date object as a number.
 * @param {Date} dateObject - A JavaScript Date object.
 * @returns {number} - A number representing the date.
 */
export function dateToInteger(dateObject: Date): number {
  return (
    dateObject.getFullYear() * 10_000 +
    (dateObject.getMonth() + 1) * 100 +
    dateObject.getDate()
  )
}
