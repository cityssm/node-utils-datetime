export function dateToString(dateObject: Date): string {
  return Intl.DateTimeFormat('fr-CA', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  }).format(dateObject)
}