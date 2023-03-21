import { dateStringToDate } from './dateStringToDate.js';
import { dateToInteger } from './dateToInteger.js';
export function dateStringToInteger(dateString) {
    return dateToInteger(dateStringToDate(dateString));
}
