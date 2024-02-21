import { isValidDateInteger } from './isValidDateInteger.js';
export function dateIntegerToDate(dateInteger, timeInteger = 0) {
    if (!isValidDateInteger(dateInteger)) {
        return undefined;
    }
    const dateString = ('00000000' + dateInteger.toString()).slice(-8);
    const timeString = ('0000' + (timeInteger ?? 0).toString()).slice(-4);
    return new Date(Number.parseInt(dateString.slice(0, 4), 10), Number.parseInt(dateString.slice(4, 6), 10) - 1, Number.parseInt(dateString.slice(6, 8), 10), Number.parseInt(timeString.slice(0, 2), 10), Number.parseInt(timeString.slice(2, 4), 10));
}
