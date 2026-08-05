const timeStringRegex = /^[01]\d:[0-5]\d$/;
/**
 * Determines if a string is a valid time string.
 * @param possibleTimeString - A possible time string.
 * @returns - True when the possible time string is valid.
 */
export function isValidTimeString(possibleTimeString) {
    return (typeof possibleTimeString === 'string' &&
        (possibleTimeString ?? '').length === 5 &&
        timeStringRegex.test(possibleTimeString));
}
