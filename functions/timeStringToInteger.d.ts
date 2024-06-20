import type { TimeString } from '../types.js';
export declare function timeStringToInteger(timeString: TimeString): number;
export declare function timeStringToInteger(timeString: Omit<string, TimeString> | undefined): undefined;
