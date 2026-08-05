import type { DateString } from '../types.js';
/**
 * Determines if a string is a valid date string.
 * @param possibleDateString - A possible date string
 * @returns - True when the possible date string is valid
 */
export declare function isValidDateString(possibleDateString: unknown): possibleDateString is DateString;
