export function dateToTimePeriodString(dateObject) {
    return Intl.DateTimeFormat('en-CA', {
        hourCycle: 'h12',
        hour: 'numeric',
        minute: '2-digit'
    })
        .format(dateObject)
        .replaceAll('\u202F', ' ');
}
