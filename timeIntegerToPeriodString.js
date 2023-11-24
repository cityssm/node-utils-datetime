import { dateIntegerToDate } from './dateIntegerToDate.js';
import { dateToTimePeriodString } from './dateToTimePeriodString.js';
export function timeIntegerToPeriodString(timeInteger) {
    return dateToTimePeriodString(dateIntegerToDate(19700101, timeInteger));
}
