import type { Hour } from '../types'
import { useLocale } from '../hooks/useLocale'

type Props = {
  hour: Hour
  selected: boolean
  onToggle: () => void
}

export function SlotButton({ hour, selected, onToggle }: Props) {
  const { formatHour } = useLocale()

  return (
    <button
      type="button"
      onClick={onToggle}
      className={`
        px-3 py-2 rounded-lg text-sm font-medium transition-colors
        ${selected
          ? 'bg-blue-600 text-white'
          : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
        }
      `}
    >
      {formatHour(hour)}
    </button>
  )
}
