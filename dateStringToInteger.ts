import { dateStringToDate } from './dateStringToDate.js'
import { dateToInteger } from './dateToInteger.js'

export function dateStringToInteger(dateString: string): number {
  return dateToInteger(dateStringToDate(dateString))
}
