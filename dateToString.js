export function dateToString(dateObject) {
    if (dateToString === undefined) {
        return '';
    }
    return Intl.DateTimeFormat('fr-CA', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    }).format(dateObject);
}
