import type { WeekDay, SlotKey, TimeFormat, Locale, Interval } from '../types'
import { makeSlotKey, getSlots } from '../types'
import { useLocale } from '../hooks/useLocale'
import { SlotButton } from './SlotButton'

type Props = {
  weekday: WeekDay
  date?: Date
  selectedSlots: Set<SlotKey>
  onToggle: (key: SlotKey) => void
  isToday?: boolean
  timeFormat: TimeFormat
  locale: Locale
  interval: Interval
}

export function DaySection({ weekday, date, selectedSlots, onToggle, isToday, timeFormat, locale, interval }: Props) {
  const { formatWeekday, formatDate, formatTime } = useLocale(timeFormat, locale)
  const slots = getSlots(interval)
  const isWeekend = weekday === 'saturday' || weekday === 'sunday'

  const label = date
    ? `${formatWeekday(weekday)} (${formatDate(date)})`
    : formatWeekday(weekday)

  const bgClass = isToday
    ? 'bg-blue-50 dark:bg-blue-900/30'
    : isWeekend
      ? 'bg-gray-50 dark:bg-gray-800/50'
      : ''

  return (
    <div className={`space-y-2 p-3 -mx-3 rounded-lg ${bgClass}`}>
      <h3 className="font-medium text-gray-900 dark:text-gray-100">{label}</h3>
      <div className="flex flex-wrap gap-2">
        {slots.map((slot) => {
          const key = makeSlotKey(weekday, slot.hour, slot.minute)
          return (
            <SlotButton
              key={key}
              hourLabel={formatTime(slot.hour, slot.minute)}
              selected={selectedSlots.has(key)}
              onToggle={() => onToggle(key)}
            />
          )
        })}
      </div>
    </div>
  )
}
