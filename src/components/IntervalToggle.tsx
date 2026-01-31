import type { Interval } from '../types'

type Props = {
  interval: Interval
  onChange: (interval: Interval) => void
}

export function IntervalToggle({ interval, onChange }: Props) {
  return (
    <div className="flex rounded-lg bg-gray-100 dark:bg-gray-800 p-1">
      <button
        type="button"
        onClick={() => onChange('1h')}
        className={`
          px-2 py-1 rounded-md text-sm font-medium transition-colors
          ${interval === '1h'
            ? 'bg-white dark:bg-gray-700 shadow-sm'
            : 'text-gray-600 dark:text-gray-400'
          }
        `}
      >
        1h
      </button>
      <button
        type="button"
        onClick={() => onChange('30min')}
        className={`
          px-2 py-1 rounded-md text-sm font-medium transition-colors
          ${interval === '30min'
            ? 'bg-white dark:bg-gray-700 shadow-sm'
            : 'text-gray-600 dark:text-gray-400'
          }
        `}
      >
        30min
      </button>
    </div>
  )
}
