import type { SlotKey, WeekDay, Hour } from '../types'
import { WEEKDAYS, parseSlotKey } from '../types'

type FormatOptions = {
  formatWeekday: (weekday: WeekDay) => string
  formatHour: (hour: Hour) => string
  formatDate?: (date: Date) => string
  weekDates?: Date[]
  prefix: string
}

export function formatOutput(slots: Set<SlotKey>, options: FormatOptions): string {
  const { formatWeekday, formatHour, formatDate, weekDates, prefix } = options

  if (slots.size === 0) return ''

  const byDay = new Map<WeekDay, Hour[]>()
  slots.forEach((key) => {
    const { weekday, hour } = parseSlotKey(key)
    if (!byDay.has(weekday)) byDay.set(weekday, [])
    byDay.get(weekday)!.push(hour)
  })

  const lines: string[] = [prefix]

  WEEKDAYS.forEach((weekday, idx) => {
    const hours = byDay.get(weekday)
    if (!hours || hours.length === 0) return

    hours.sort((a, b) => a - b)
    const ranges = mergeHours(hours)
    const rangeStr = ranges.map((r) => formatRange(r, formatHour)).join(', ')

    let dayLabel = formatWeekday(weekday)
    if (formatDate && weekDates) {
      dayLabel += ` (${formatDate(weekDates[idx])})`
    }

    lines.push(`${dayLabel}: ${rangeStr}`)
  })

  return lines.join('\n')
}

function mergeHours(hours: Hour[]): Array<[Hour, Hour]> {
  const ranges: Array<[Hour, Hour]> = []
  let start = hours[0]
  let end = hours[0]

  for (let i = 1; i < hours.length; i++) {
    if (hours[i] === end + 1) {
      end = hours[i]
    } else {
      ranges.push([start, end])
      start = hours[i]
      end = hours[i]
    }
  }
  ranges.push([start, end])
  return ranges
}

function formatRange([start, end]: [Hour, Hour], formatHour: (h: Hour) => string): string {
  if (start === end) {
    return formatHour(start)
  }
  return `${formatHour(start)}-${formatHour((end + 1) as Hour)}`
}
