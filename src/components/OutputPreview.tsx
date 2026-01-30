import type { SlotKey, Mode, TimeFormat, Locale } from '../types'
import { useLocale } from '../hooks/useLocale'
import { formatOutput } from '../utils/formatOutput'
import { getWeekDates } from '../utils/dateUtils'

type Props = {
  mode: Mode
  weekStart: Date
  selectedSlots: Set<SlotKey>
  timeFormat: TimeFormat
  locale: Locale
  localTimezone: string
  targetTimezone: string
}

export function OutputPreview({
  mode,
  weekStart,
  selectedSlots,
  timeFormat,
  locale,
  localTimezone,
  targetTimezone,
}: Props) {
  const { t, formatWeekday, formatHour, formatDate } = useLocale(timeFormat, locale)

  const weekDates = mode === 'week' ? getWeekDates(weekStart) : undefined
  const text = formatOutput(selectedSlots, {
    formatWeekday,
    formatHour,
    formatDate: mode === 'week' ? formatDate : undefined,
    weekDates,
    prefix: t('output.prefix'),
    localTimezone,
    targetTimezone,
  })

  if (selectedSlots.size === 0) {
    return (
      <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
        <p className="text-sm text-gray-400 dark:text-gray-500 italic">
          Select time slots to see preview
        </p>
      </div>
    )
  }

  return (
    <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
      <pre className="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-wrap font-mono">
        {text}
      </pre>
    </div>
  )
}
