export function dateToTimeInteger(dateObject) {
    if (dateObject === undefined) {
        return undefined;
    }
    return dateObject.getHours() * 100 + dateObject.getMinutes();
}
