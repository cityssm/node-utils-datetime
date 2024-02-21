const dateStringRegex = /^\d{4}-[01]\d-[0-3]\d$/

/**
 * Determines if a string is a valid date string.
 * @param {unknown} possibleDateString - A possible date string
 * @returns {boolean} - True when the possible date string is valid
 */
export function isValidDateString(possibleDateString: unknown): boolean {
  return (
    typeof possibleDateString === 'string' &&
    (possibleDateString ?? '').length === 10 &&
    dateStringRegex.test(possibleDateString)
  )
}
