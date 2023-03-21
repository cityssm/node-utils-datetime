export function dateIntegerToDate(dateInteger: number | undefined | null): Date | undefined {

  if (dateInteger === null || dateInteger === undefined || Number.isNaN(dateInteger) || dateInteger === 0) {
    return
  }

  const dateString = ('00000000' + dateInteger!.toString()).slice(-8)

  return new Date(
    Number.parseInt(dateString.slice(0, 4), 10),
    Number.parseInt(dateString.slice(4, 6), 10) - 1,
    Number.parseInt(dateString.slice(6, 8), 10)
  )
}
