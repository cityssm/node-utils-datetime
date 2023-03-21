export function dateToTimeInteger(dateObject: Date): number {
  return dateObject.getHours() * 100 + dateObject.getMinutes()
}
