export function dateToTimeString(dateObject) {
    if (dateObject === undefined) {
        return '';
    }
    return Intl.DateTimeFormat('en-CA', {
        hourCycle: 'h24',
        hour: '2-digit',
        minute: '2-digit'
    }).format(dateObject);
}
