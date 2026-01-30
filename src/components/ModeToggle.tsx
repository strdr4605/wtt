import type { Mode } from '../types'
import { useLocale } from '../hooks/useLocale'

type Props = {
  mode: Mode
  onChange: (mode: Mode) => void
}

export function ModeToggle({ mode, onChange }: Props) {
  const { t } = useLocale()

  return (
    <div className="flex rounded-lg bg-gray-100 dark:bg-gray-800 p-1">
      <button
        type="button"
        onClick={() => onChange('week')}
        className={`
          px-3 py-1 rounded-md text-sm font-medium transition-colors
          ${mode === 'week'
            ? 'bg-white dark:bg-gray-700 shadow-sm'
            : 'text-gray-600 dark:text-gray-400'
          }
        `}
      >
        {t('mode.week')}
      </button>
      <button
        type="button"
        onClick={() => onChange('generic')}
        className={`
          px-3 py-1 rounded-md text-sm font-medium transition-colors
          ${mode === 'generic'
            ? 'bg-white dark:bg-gray-700 shadow-sm'
            : 'text-gray-600 dark:text-gray-400'
          }
        `}
      >
        {t('mode.generic')}
      </button>
    </div>
  )
}
