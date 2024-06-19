import { dateIntegerToDate } from './dateIntegerToDate.js';
import { dateToTimePeriodString } from './dateToTimePeriodString.js';
export function timeIntegerToPeriodString(timeInteger = 0) {
    return dateToTimePeriodString(dateIntegerToDate(19700101, timeInteger ?? 0));
}
