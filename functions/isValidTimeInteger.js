export function isValidTimeInteger(possibleTimeInteger) {
    return (typeof possibleTimeInteger === 'number' &&
        possibleTimeInteger >= 0 &&
        possibleTimeInteger <= 2359 &&
        possibleTimeInteger % 1 === 0);
}
