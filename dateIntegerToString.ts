import { dateIntegerToDate } from './dateIntegerToDate.js'
import { dateToString } from './dateToString.js'

export function dateIntegerToString(dateInteger: number | undefined | null): string | undefined {
  if (dateInteger === null || dateInteger === undefined || Number.isNaN(dateInteger) || dateInteger === 0) {
    return ''
  }

  return dateToString(dateIntegerToDate(dateInteger!)!)
}
