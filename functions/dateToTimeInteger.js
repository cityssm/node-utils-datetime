/**
 * Formats the time in a JavaScript Date as a number.
 * @param dateObject - A JavaScript Date object.
 * @returns - A number representing a time.
 */
export function dateToTimeInteger(dateObject) {
    if (dateObject === undefined) {
        return undefined;
    }
    return dateObject.getHours() * 100 + dateObject.getMinutes();
}
