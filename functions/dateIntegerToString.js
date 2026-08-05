import { dateIntegerToDate } from './dateIntegerToDate.js';
import { dateToString } from './dateToString.js';
import { isValidDateInteger } from './isValidDateInteger.js';
/**
 * Formats a date number as a string.
 * @param dateInteger - A number representing a date.
 * @returns - A string representing a date.
 */
export function dateIntegerToString(dateInteger) {
    if (!isValidDateInteger(dateInteger)) {
        return '';
    }
    return dateToString(dateIntegerToDate(dateInteger));
}
