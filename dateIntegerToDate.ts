import { isValidDateInteger } from './isValidDateInteger.js'
import { isValidTimeInteger } from './isValidTimeInteger.js'

export function dateIntegerToDate<
  D extends number | undefined | null,
  T extends number | undefined | null
>(dateInteger: D, timeInteger?: T): Date | undefined

export function dateIntegerToDate(
  dateInteger: number,
  timeInteger?: number
): Date | undefined

export function dateIntegerToDate(
  dateInteger: undefined | null,
  timeInteger?: undefined | null
): undefined

/**
 * @param {number | undefined | null} dateInteger - A number representing a date (ex. 20241231)
 * @param {number} timeInteger - A number representing a time (ex. 2359)
 * @returns {Date | undefined} - A Date object (ex. '2024-12-31 23:59')
 */
export function dateIntegerToDate(
  dateInteger: number | undefined | null,
  timeInteger: number | undefined | null = 0
): Date | undefined {
  if (!isValidDateInteger(dateInteger) || !isValidTimeInteger(timeInteger)) {
    return undefined
  }

  const dateString = `00000000${dateInteger.toString()}`.slice(-8)

  const timeString = `0000${(timeInteger ?? 0).toString()}`.slice(-4)

  return new Date(
    Number.parseInt(dateString.slice(0, 4), 10),
    Number.parseInt(dateString.slice(4, 6), 10) - 1,
    Number.parseInt(dateString.slice(6, 8), 10),
    Number.parseInt(timeString.slice(0, 2), 10),
    Number.parseInt(timeString.slice(2, 4), 10)
  )
}
