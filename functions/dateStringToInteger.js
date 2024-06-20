import { dateStringToDate } from './dateStringToDate.js';
import { dateToInteger } from './dateToInteger.js';
import { isValidDateString } from './isValidDateString.js';
export function dateStringToInteger(dateString) {
    if (!isValidDateString(dateString)) {
        return undefined;
    }
    return dateToInteger(dateStringToDate(dateString));
}
