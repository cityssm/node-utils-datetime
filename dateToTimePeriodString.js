export function dateToTimePeriodString(dateObject) {
    if (dateObject === undefined) {
        return '';
    }
    return Intl.DateTimeFormat('en-CA', {
        hourCycle: 'h12',
        hour: 'numeric',
        minute: '2-digit'
    })
        .format(dateObject)
        .replaceAll('\u202F', ' ');
}
