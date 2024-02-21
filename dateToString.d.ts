import type { DateString } from './dateTimeTypes.js';
export declare function dateToString<D extends Date | undefined>(dateObject: D): DateString | '';
export declare function dateToString(dateObject: Date): DateString;
export declare function dateToString(dateObject: undefined): '';
