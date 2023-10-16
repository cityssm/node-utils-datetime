import 'core-js';
export function timeStringToInteger(timeString) {
    return Number.parseInt(('0' + timeString).replaceAll(':', ''), 10);
}
