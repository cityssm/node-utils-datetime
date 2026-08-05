import { isValidTimeString } from './isValidTimeString.js';
/*
export function timeStringToInteger(
  timeString: Omit<string, TimeString> | undefined
): undefined
*/
/**
 * Formats a string representing a time as a number.
 * @param timeString - A string representing a time.
 * @returns - A number representing a time.
 */
export function timeStringToInteger(timeString) {
    if (!isValidTimeString(timeString)) {
        return undefined;
    }
    return Number.parseInt(`0${timeString}`.replaceAll(':', ''), 10);
}
