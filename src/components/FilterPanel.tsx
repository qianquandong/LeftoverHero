import { useTranslation } from 'react-i18next'

export type CookingMethod = 'stir-fry' | 'bake' | 'boil' | 'fry' | 'steam' | 'grill' | 'roast' | 'soup' | 'salad'
export type DietaryRestriction = 
  | 'gluten-free' 
  | 'sugar-free' 
  | 'dairy-free'
  | 'nut-free'
  | 'shellfish-free'
  | 'egg-free'
  | 'soy-free'
  | 'lamb-free'
  | 'honey-free'
  | 'vegetarian'
  | 'vegan'
  | 'low-carb'
  | 'keto'

interface FilterPanelProps {
  selectedCookingMethods: CookingMethod[]
  selectedDietaryRestrictions: DietaryRestriction[]
  onToggleCookingMethod: (method: CookingMethod) => void
  onToggleDietaryRestriction: (restriction: DietaryRestriction) => void
}

export default function FilterPanel({
  selectedCookingMethods,
  selectedDietaryRestrictions,
  onToggleCookingMethod,
  onToggleDietaryRestriction,
}: FilterPanelProps) {
  const { t } = useTranslation()

  const cookingMethods: CookingMethod[] = ['stir-fry', 'bake', 'boil', 'fry', 'steam', 'grill', 'roast', 'soup', 'salad']
  const dietaryRestrictions: DietaryRestriction[] = [
    'gluten-free', 
    'sugar-free', 
    'dairy-free',
    'nut-free',
    'shellfish-free',
    'egg-free',
    'soy-free',
    'lamb-free',
    'honey-free',
    'vegetarian',
    'vegan',
    'low-carb',
    'keto'
  ]

  const renderCookingMethodButton = (method: CookingMethod) => {
    const isSelected = selectedCookingMethods.includes(method)
    const emojiMap: Record<CookingMethod, string> = {
      'stir-fry': '🍳',
      'bake': '🔥',
      'boil': '🥘',
      'fry': '🍳',
      'steam': '♨️',
      'grill': '🔥',
      'roast': '🔥',
      'soup': '🍲',
      'salad': '🥗',
    }

    // 将 'stir-fry' 转换为 'stirFry' 以匹配翻译key
    const translationKey = method
      .split('-')
      .map((word, index) => index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1))
      .join('')

    return (
      <button
        key={method}
        onClick={() => onToggleCookingMethod(method)}
        className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
          isSelected
            ? 'bg-blue-500 text-white shadow-md'
            : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
        }`}
      >
        <span className="mr-1">{emojiMap[method]}</span>
        {t(`filters.${translationKey}`)}
      </button>
    )
  }

  const renderDietaryRestrictionButton = (restriction: DietaryRestriction) => {
    const isSelected = selectedDietaryRestrictions.includes(restriction)
    const emojiMap: Record<DietaryRestriction, string> = {
      'gluten-free': '🌾',
      'sugar-free': '🍬',
      'dairy-free': '🥛',
      'nut-free': '🥜',
      'shellfish-free': '🦐',
      'egg-free': '🥚',
      'soy-free': '🫛',
      'lamb-free': '🐑',
      'honey-free': '🍯',
      'vegetarian': '🥗',
      'vegan': '🌱',
      'low-carb': '🥑',
      'keto': '🥩',
    }

    // 将 restriction key 转换为翻译 key（例如 'gluten-free' -> 'glutenFree'）
    const translationKey = restriction
      .split('-')
      .map((word, index) => index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1))
      .join('')

    return (
      <button
        key={restriction}
        onClick={() => onToggleDietaryRestriction(restriction)}
        className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
          isSelected
            ? 'bg-purple-500 text-white shadow-md'
            : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
        }`}
      >
        <span className="mr-1">{emojiMap[restriction]}</span>
        {t(`filters.${translationKey}`)}
      </button>
    )
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4 mb-6">
      {/* Cooking Methods */}
      <div className="mb-4">
        <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
          {t('filters.cookingMethods')}
        </h3>
        <div className="flex flex-wrap gap-2">
          {cookingMethods.map(renderCookingMethodButton)}
        </div>
      </div>

      {/* Dietary Restrictions */}
      <div>
        <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
          {t('filters.dietaryRestrictions')}
        </h3>
        <div className="flex flex-wrap gap-2">
          {dietaryRestrictions.map(renderDietaryRestrictionButton)}
        </div>
      </div>
    </div>
  )
}

