/**
 * Determines if a number is a valid time number.
 * @param possibleTimeInteger - A possible time number
 * @returns - True if the possible time integer is valid.
 */
export function isValidTimeInteger(
  possibleTimeInteger: unknown
): possibleTimeInteger is number {
  return (
    typeof possibleTimeInteger === 'number' &&
    possibleTimeInteger >= 0 &&
    possibleTimeInteger <= 2359 &&
    possibleTimeInteger % 1 === 0
  )
}
