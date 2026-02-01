import { useLocale } from '../hooks/useLocale'
import type { Locale } from '../types'

type Props = {
  locale: Locale
  onDismiss: () => void
}

export function InstallPrompt({ locale, onDismiss }: Props) {
  const { t } = useLocale('24h', locale)

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl max-w-sm w-full p-6 space-y-4">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
          {t('install.title')}
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          {t('install.description')}
        </p>
        <div className="text-sm text-gray-500 dark:text-gray-400 space-y-2">
          <p><strong>iOS:</strong> {t('install.iosHint')}</p>
          <p><strong>Android:</strong> {t('install.androidHint')}</p>
        </div>
        <button
          type="button"
          onClick={onDismiss}
          className="w-full px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
        >
          {t('install.dismiss')}
        </button>
      </div>
    </div>
  )
}
