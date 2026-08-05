import { dateIntegerToDate } from './dateIntegerToDate.js';
import { dateToTimePeriodString } from './dateToTimePeriodString.js';
/**
 * Formats a time represented as a number as a string.
 * @param timeInteger - A number representing a time.
 * @returns - A string representing a time.
 */
export function timeIntegerToPeriodString(timeInteger) {
    if (timeInteger === undefined || timeInteger === null) {
        return '';
    }
    // eslint-disable-next-line unicorn/numeric-separators-style
    return dateToTimePeriodString(dateIntegerToDate(19700101, timeInteger));
}
