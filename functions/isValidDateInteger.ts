/**
 * Determines if a number is a valid date number.
 * @param possibleDateInteger - A possible date number
 * @returns - True if the possible date integer is valid.
 */
export function isValidDateInteger(
  possibleDateInteger: unknown
): possibleDateInteger is number {
  return (
    typeof possibleDateInteger === 'number' &&
    possibleDateInteger >= 101 &&
    possibleDateInteger % 1 === 0
  )
}
