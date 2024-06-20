import { dateIntegerToDate } from './dateIntegerToDate.js';
import { dateToString } from './dateToString.js';
import { isValidDateInteger } from './isValidDateInteger.js';
export function dateIntegerToString(dateInteger) {
    if (!isValidDateInteger(dateInteger)) {
        return '';
    }
    return dateToString(dateIntegerToDate(dateInteger));
}
