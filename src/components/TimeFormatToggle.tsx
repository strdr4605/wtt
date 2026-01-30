import type { TimeFormat } from '../types'

type Props = {
  timeFormat: TimeFormat
  onChange: (format: TimeFormat) => void
}

export function TimeFormatToggle({ timeFormat, onChange }: Props) {
  return (
    <div className="flex rounded-lg bg-gray-100 dark:bg-gray-800 p-1">
      <button
        type="button"
        onClick={() => onChange('12h')}
        className={`
          px-2 py-1 rounded-md text-sm font-medium transition-colors
          ${timeFormat === '12h'
            ? 'bg-white dark:bg-gray-700 shadow-sm'
            : 'text-gray-600 dark:text-gray-400'
          }
        `}
      >
        12h
      </button>
      <button
        type="button"
        onClick={() => onChange('24h')}
        className={`
          px-2 py-1 rounded-md text-sm font-medium transition-colors
          ${timeFormat === '24h'
            ? 'bg-white dark:bg-gray-700 shadow-sm'
            : 'text-gray-600 dark:text-gray-400'
          }
        `}
      >
        24h
      </button>
    </div>
  )
}
