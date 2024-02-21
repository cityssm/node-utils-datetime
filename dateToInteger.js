export function dateToInteger(dateObject) {
    if (dateObject === undefined) {
        return undefined;
    }
    return (dateObject.getFullYear() * 10000 +
        (dateObject.getMonth() + 1) * 100 +
        dateObject.getDate());
}
