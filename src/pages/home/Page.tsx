import { useTranslation } from 'react-i18next'

export default function HomePage() {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            {t('app.title')}
          </h1>
          <p className="text-2xl text-gray-600 mb-8">
            {t('app.subtitle')}
          </p>
          <h2 className="text-3xl font-semibold text-gray-700 mb-4">
            {t('home.title')}
          </h2>
          <p className="text-xl text-gray-600">
            {t('home.description')}
          </p>
        </div>
      </div>
    </div>
  )
}

