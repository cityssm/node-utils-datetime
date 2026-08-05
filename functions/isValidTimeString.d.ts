import type { TimeString } from '../types.js';
/**
 * Determines if a string is a valid time string.
 * @param possibleTimeString - A possible time string.
 * @returns - True when the possible time string is valid.
 */
export declare function isValidTimeString(possibleTimeString: unknown): possibleTimeString is TimeString;
