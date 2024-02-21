/**
 * Determines if a number is a valid date number.
 * @param {unknown} possibleDateInteger - A possible date number
 * @returns {boolean} - True if the possible date integer is valid.
 */
export function isValidDateInteger(possibleDateInteger: unknown): boolean {
  return (
    typeof possibleDateInteger === 'number' &&
    possibleDateInteger >= 101 &&
    possibleDateInteger % 1 === 0
  )
}
