export function dateToInteger(dateObject: Date): number {
  return (
    dateObject.getFullYear() * 10_000 +
    (dateObject.getMonth() + 1) * 100 +
    dateObject.getDate()
  )
}
