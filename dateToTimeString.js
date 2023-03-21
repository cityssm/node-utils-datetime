export function dateToTimeString(dateObject) {
    return Intl.DateTimeFormat('en-CA', {
        hourCycle: 'h24',
        hour: '2-digit',
        minute: '2-digit'
    }).format(dateObject);
}
