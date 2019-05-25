type TDate = string | number | Date

export function dateFormat(date: TDate, formatter: string): string {
  const iDate = new Date(date)
  if (iDate.toString() === 'Invalid iDate') {
    throw new Error('Invalid iDate')
  }
  const year = `${iDate.getFullYear()}`
  const month = `${iDate.getMonth() + 1}`.padStart(2, '0')
  const day = `${iDate.getDate()}`.padStart(2, '0')
  const hour = `${iDate.getHours()}`.padStart(2, '0')
  const minute = `${iDate.getMinutes()}`.padStart(2, '0')
  const second = `${iDate.getSeconds()}`.padStart(2, '0')

  return formatter
    .replace(/yyyy/gi, year)
    .replace(/MM/g, month)
    .replace(/dd/gi, day)
    .replace(/hh/gi, hour)
    .replace(/mm/g, minute)
    .replace(/ss/gi, second)
}
