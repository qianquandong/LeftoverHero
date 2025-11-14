import { useState } from 'react'
import { Settings } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import SettingsPanel from './SettingsPanel'

interface HeaderProps {
  selectedCount: number
  onReset: () => void
}

export default function Header({ selectedCount, onReset }: HeaderProps) {
  const { t } = useTranslation()
  const [isSettingsOpen, setIsSettingsOpen] = useState(false)

  return (
    <>
      <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-6 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
            {t('app.title')}
          </h1>
          <div className="flex items-center gap-3">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors">
              {selectedCount} {t('home.ingredientsSelected')}
            </button>
            <button
              onClick={onReset}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 transition-colors"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
              {t('home.resetFilters')}
            </button>
            <button
              onClick={() => setIsSettingsOpen(true)}
              className="p-2 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
            >
              <Settings className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>
      <SettingsPanel isOpen={isSettingsOpen} onClose={() => setIsSettingsOpen(false)} />
    </>
  )
}

