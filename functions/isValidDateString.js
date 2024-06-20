const dateStringRegex = /^\d{4}-[01]\d-[0-3]\d$/;
export function isValidDateString(possibleDateString) {
    return (typeof possibleDateString === 'string' &&
        (possibleDateString ?? '').length === 10 &&
        dateStringRegex.test(possibleDateString));
}
