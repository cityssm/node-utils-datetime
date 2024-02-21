/**
 * Formats the time in a JavaScript Date as a number.
 * @param {Date} dateObject - A JavaString Date object.
 * @returns {number} - A number representing a time.
 */
export function dateToTimeInteger(dateObject: Date): number {
  return dateObject.getHours() * 100 + dateObject.getMinutes()
}
