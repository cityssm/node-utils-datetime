import type { DateString } from '../types.js';
export declare function dateStringToInteger(dateString: DateString): number;
export declare function dateStringToInteger(dateString: Omit<string, DateString> | undefined): undefined;
