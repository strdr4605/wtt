import type { Mode, SlotKey } from '../types'
import { WEEKDAYS } from '../types'
import { getWeekDates } from '../utils/dateUtils'
import { DaySection } from './DaySection'

type Props = {
  mode: Mode
  weekStart: Date
  selectedSlots: Set<SlotKey>
  onToggle: (key: SlotKey) => void
}

export function TimeList({ mode, weekStart, selectedSlots, onToggle }: Props) {
  const weekDates = mode === 'week' ? getWeekDates(weekStart) : undefined

  return (
    <div className="space-y-6">
      {WEEKDAYS.map((weekday, idx) => (
        <DaySection
          key={weekday}
          weekday={weekday}
          date={weekDates?.[idx]}
          selectedSlots={selectedSlots}
          onToggle={onToggle}
        />
      ))}
    </div>
  )
}
