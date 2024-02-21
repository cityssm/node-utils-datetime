export function isValidDateInteger(possibleDateInteger) {
    return (typeof possibleDateInteger === 'number' &&
        possibleDateInteger >= 101 &&
        possibleDateInteger % 1 === 0);
}
