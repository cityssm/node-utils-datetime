export function dateToInteger(dateObject) {
    return (dateObject.getFullYear() * 10000 +
        (dateObject.getMonth() + 1) * 100 +
        dateObject.getDate());
}
