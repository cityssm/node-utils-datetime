export function dateToTimeInteger(dateObject) {
    return dateObject.getHours() * 100 + dateObject.getMinutes();
}
