const timeStringRegex = /^[01]\d:[0-5]\d$/;
export function isValidTimeString(possibleTimeString) {
    return (typeof possibleTimeString === 'string' &&
        (possibleTimeString ?? '').length === 5 &&
        timeStringRegex.test(possibleTimeString));
}
