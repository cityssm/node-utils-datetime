/**
 * Formats a JavaScript Date object as a date string.
 * @param dateObject - A JavaScript Date object
 * @returns - A date string.
 */
export function dateToString(dateObject) {
    if (dateObject === undefined) {
        return '';
    }
    return Intl.DateTimeFormat('fr-CA', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    }).format(dateObject);
}
