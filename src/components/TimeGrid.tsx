import { useState, useCallback } from 'react'
import type { Mode, SlotKey, WeekDay, Hour, TimeFormat, Locale, Interval, Minute, Slot } from '../types'
import { WEEKDAYS, makeSlotKey, getSlots } from '../types'
import { getWeekDates } from '../utils/dateUtils'
import { useLocale } from '../hooks/useLocale'

type Props = {
  mode: Mode
  weekStart: Date
  selectedSlots: Set<SlotKey>
  onToggle: (key: SlotKey) => void
  onSelect: (keys: SlotKey[]) => void
  timeFormat: TimeFormat
  locale: Locale
  interval: Interval
}

export function TimeGrid({ mode, weekStart, selectedSlots, onToggle, onSelect, timeFormat, locale, interval }: Props) {
  const { formatWeekday, formatDate, formatTime } = useLocale(timeFormat, locale)
  const slots = getSlots(interval)
  const weekDates = mode === 'week' ? getWeekDates(weekStart) : undefined

  const today = new Date()
  today.setHours(0, 0, 0, 0)

  const isTodayIdx = weekDates?.findIndex((d) => {
    const date = new Date(d)
    date.setHours(0, 0, 0, 0)
    return date.getTime() === today.getTime()
  }) ?? -1

  const [dragStart, setDragStart] = useState<{ weekday: WeekDay; hour: Hour; minute: Minute } | null>(null)
  const [dragEnd, setDragEnd] = useState<{ weekday: WeekDay; hour: Hour; minute: Minute } | null>(null)

  const getSlotIndex = (slot: Slot): number => {
    return slots.findIndex((s) => s.hour === slot.hour && s.minute === slot.minute)
  }

  const getDragSlots = useCallback((): SlotKey[] => {
    if (!dragStart || !dragEnd) return []
    const startDayIdx = WEEKDAYS.indexOf(dragStart.weekday)
    const endDayIdx = WEEKDAYS.indexOf(dragEnd.weekday)
    const startSlotIdx = getSlotIndex({ hour: dragStart.hour, minute: dragStart.minute })
    const endSlotIdx = getSlotIndex({ hour: dragEnd.hour, minute: dragEnd.minute })

    const minDay = Math.min(startDayIdx, endDayIdx)
    const maxDay = Math.max(startDayIdx, endDayIdx)
    const minSlot = Math.min(startSlotIdx, endSlotIdx)
    const maxSlot = Math.max(startSlotIdx, endSlotIdx)

    const result: SlotKey[] = []
    for (let d = minDay; d <= maxDay; d++) {
      for (let s = minSlot; s <= maxSlot; s++) {
        result.push(makeSlotKey(WEEKDAYS[d], slots[s].hour, slots[s].minute))
      }
    }
    return result
  }, [dragStart, dragEnd, slots])

  const handleMouseDown = (weekday: WeekDay, hour: Hour, minute: Minute) => {
    setDragStart({ weekday, hour, minute })
    setDragEnd({ weekday, hour, minute })
  }

  const handleMouseEnter = (weekday: WeekDay, hour: Hour, minute: Minute) => {
    if (dragStart) {
      setDragEnd({ weekday, hour, minute })
    }
  }

  const handleMouseUp = () => {
    if (dragStart && dragEnd) {
      const slots = getDragSlots()
      if (slots.length === 1) {
        onToggle(slots[0])
      } else {
        onSelect(slots)
      }
    }
    setDragStart(null)
    setDragEnd(null)
  }

  const dragSlots = new Set(getDragSlots())

  return (
    <div
      className="select-none"
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <div className="grid grid-cols-8 gap-1">
        <div />
        {WEEKDAYS.map((weekday, idx) => {
          const isWeekend = weekday === 'saturday' || weekday === 'sunday'
          const isToday = mode === 'week' && idx === isTodayIdx
          const headerBg = isToday
            ? 'bg-blue-50 dark:bg-blue-900/30 rounded-t-lg'
            : isWeekend
              ? 'bg-gray-50 dark:bg-gray-800/50 rounded-t-lg'
              : ''
          return (
            <div key={weekday} className={`text-center text-sm font-medium py-2 ${headerBg}`}>
              <div>{formatWeekday(weekday)}</div>
              {weekDates && (
                <div className="text-xs text-gray-500">{formatDate(weekDates[idx])}</div>
              )}
            </div>
          )
        })}

        {slots.map((slot) => (
          <>
            <div key={`slot-${slot.hour}-${slot.minute}`} className="text-right text-xs text-gray-500 pr-2 py-1">
              {slot.minute === 0 || interval === '30min' ? formatTime(slot.hour, slot.minute) : ''}
            </div>
            {WEEKDAYS.map((weekday, dayIdx) => {
              const key = makeSlotKey(weekday, slot.hour, slot.minute)
              const isSelected = selectedSlots.has(key)
              const isDragging = dragSlots.has(key)
              const isWeekend = weekday === 'saturday' || weekday === 'sunday'
              const isToday = mode === 'week' && dayIdx === isTodayIdx
              const cellHeight = interval === '30min' ? 'h-6' : 'h-8'

              return (
                <button
                  key={key}
                  type="button"
                  onMouseDown={() => handleMouseDown(weekday, slot.hour, slot.minute)}
                  onMouseEnter={() => handleMouseEnter(weekday, slot.hour, slot.minute)}
                  className={`
                    ${cellHeight} rounded transition-colors
                    ${isSelected
                      ? 'bg-blue-600'
                      : isDragging
                        ? 'bg-blue-300 dark:bg-blue-700'
                        : isToday
                          ? 'bg-blue-100 dark:bg-blue-900/40 hover:bg-blue-200 dark:hover:bg-blue-800/50'
                          : isWeekend
                            ? 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600'
                            : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
                    }
                  `}
                />
              )
            })}
          </>
        ))}
      </div>
    </div>
  )
}
