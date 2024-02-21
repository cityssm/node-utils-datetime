import type { TimeString } from './dateTimeTypes.js';
export declare function dateToTimeString<D extends Date | undefined>(dateObject: D): TimeString | '';
export declare function dateToTimeString(dateObject: Date): TimeString;
export declare function dateToTimeString(dateObject: undefined): '';
