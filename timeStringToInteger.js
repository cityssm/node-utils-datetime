import { isValidTimeString } from './isValidTimeString.js';
export function timeStringToInteger(timeString) {
    if (!isValidTimeString(timeString)) {
        return undefined;
    }
    return Number.parseInt(`0${timeString}`.replaceAll(':', ''), 10);
}
