export function timeStringToInteger(timeString) {
    return Number.parseInt(('0' + timeString).replace(/:/g, ''), 10);
}
