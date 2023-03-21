export const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]

export const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
]

/*
 * Date Functions
 */

// From Date Object

export const dateToInteger = (dateObject: Date): number => {
  return (
    dateObject.getFullYear() * 10_000 +
    dateObject.getMonth() * 100 +
    100 +
    dateObject.getDate()
  )
}

export const dateToString = (dateObject: Date): string => {
  return Intl.DateTimeFormat('fr-CA', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  }).format(dateObject)
}

// From Date Integer
// 20200425

export const dateIntegerToString = (dateInteger: number): string => {
  if (dateInteger === null || dateInteger === 0) {
    return ''
  }

  const dateString = ('00000000' + dateInteger.toString()).slice(-8)
  return (
    dateString.slice(0, 4) +
    '-' +
    dateString.slice(4, 6) +
    '-' +
    dateString.slice(6, 8)
  )
}

export const dateIntegerToDate = (dateInteger: number): Date | undefined => {
  if (dateInteger === null || dateInteger === 0) {
    return
  }

  const dateString = ('00000000' + dateInteger.toString()).slice(-8)
  return new Date(
    Number.parseInt(dateString.slice(0, 4), 10),
    Number.parseInt(dateString.slice(4, 6), 10) - 1,
    Number.parseInt(dateString.slice(6, 8), 10)
  )
}

// From Date String
// "2020-04-25"

export const dateStringToDate = (
  dateString: string,
  timeString = '00:00'
): Date => {
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

export const dateStringToInteger = (dateString: string): number => {
  return Number.parseInt(('0' + dateString).replace(/-/g, ''), 10)
}

/*
 * Time Functions
 */

// From Date Object

export const dateToTimeInteger = (dateObject: Date): number => {
  return dateObject.getHours() * 100 + dateObject.getMinutes()
}

export const dateToTimeString = (dateObject: Date): string => {
  return Intl.DateTimeFormat('en-CA', {
    hourCycle: 'h24',
    hour: '2-digit',
    minute: '2-digit'
    
  }).format(dateObject)
}

// From Time Integer
// 1424

export const timeIntegerToString = (timeInteger: number): string => {
  const timeString = ('0000' + (timeInteger || 0).toString()).slice(-4)
  return timeString.slice(0, 2) + ':' + timeString.slice(2, 4)
}

// From Time String
// "14:24"

export const timeStringToInteger = (timeString: string): number => {
  return Number.parseInt(('0' + timeString).replace(/:/g, ''), 10)
}
