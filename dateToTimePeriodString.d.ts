import type { TimePeriodString } from './dateTimeTypes.js';
export declare function dateToTimePeriodString<D extends Date | undefined>(dateObject: D): TimePeriodString | '';
export declare function dateToTimePeriodString(dateObject: Date): TimePeriodString;
export declare function dateToTimePeriodString(dateObject: undefined): '';
