export function dateStringToDate(dateString: string,
  timeString = '00:00'): Date {
  const datePieces = dateString.split('-')
  const timePieces = timeString.split(':')

  return new Date(
    Number.parseInt(datePieces[0], 10),
    Number.parseInt(datePieces[1], 10) - 1,
    Number.parseInt(datePieces[2], 10),
    Number.parseInt(timePieces[0], 10),
    Number.parseInt(timePieces[1], 10),
    0,
    0
  )
}