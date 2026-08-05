/**
 * Checks if two dates are on the same day, ignoring the time.
 * @param date1 The first date to compare.
 * @param date2 The second date to compare.
 * @returns `true` if the dates are on the same day, `false` otherwise.
 */
export function isSameDay(date1: Date, date2: Date): boolean {
  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  )
}
