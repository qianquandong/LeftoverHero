import { useState } from 'react'
import { useTranslation } from 'react-i18next'

interface Ingredient {
  id: string
  name: string
  emoji: string
  category: 'vegetables' | 'meats' | 'staples'
}

const allIngredients: Ingredient[] = [
  // Meats (ordered as specified)
  { id: 'chicken', name: 'Chicken', emoji: '🍗', category: 'meats' },
  { id: 'egg', name: 'Egg', emoji: '🥚', category: 'meats' },
  { id: 'beef', name: 'Beef', emoji: '🥩', category: 'meats' },
  { id: 'pork', name: 'Pork', emoji: '🐷', category: 'meats' },
  { id: 'ground-beef', name: 'Ground Beef', emoji: '🥩', category: 'meats' },
  { id: 'salmon', name: 'Salmon', emoji: '🐟', category: 'meats' },
  { id: 'tofu', name: 'Tofu', emoji: '🧈', category: 'meats' },
  { id: 'bacon', name: 'Bacon', emoji: '🥓', category: 'meats' },
  { id: 'sausage', name: 'Sausage', emoji: '🌭', category: 'meats' },
  { id: 'turkey', name: 'Turkey', emoji: '🦃', category: 'meats' },
  { id: 'shrimp', name: 'Shrimp', emoji: '🦐', category: 'meats' },
  { id: 'lamb', name: 'Lamb', emoji: '🐑', category: 'meats' },
  { id: 'fish', name: 'Fish', emoji: '🐟', category: 'meats' },
  { id: 'deli-meat', name: 'Deli Meat', emoji: '🥩', category: 'meats' },
  { id: 'oysters-clams', name: 'Oysters / Clams', emoji: '🦪', category: 'meats' },
  { id: 'veal', name: 'Veal', emoji: '🥩', category: 'meats' },
  { id: 'lunch-meat', name: 'Spam', emoji: '🥓', category: 'meats' },
  { id: 'chicken-breast', name: 'Chicken Breast', emoji: '🍗', category: 'meats' },
  // Vegetables
  { id: 'potato', name: 'Potato', emoji: '🥔', category: 'vegetables' },
  { id: 'carrot', name: 'Carrot', emoji: '🥕', category: 'vegetables' },
  { id: 'broccoli', name: 'Broccoli', emoji: '🥦', category: 'vegetables' },
  { id: 'radish', name: 'White Radish', emoji: '🥬', category: 'vegetables' },
  { id: 'zucchini', name: 'Zucchini', emoji: '🥒', category: 'vegetables' },
  { id: 'tomato', name: 'Tomato', emoji: '🍅', category: 'vegetables' },
  { id: 'onion', name: 'Onion', emoji: '🧅', category: 'vegetables' },
  { id: 'garlic', name: 'Garlic', emoji: '🧄', category: 'vegetables' },
  { id: 'bell-pepper', name: 'Bell Pepper', emoji: '🫑', category: 'vegetables' },
  { id: 'cucumber', name: 'Cucumber', emoji: '🥒', category: 'vegetables' },
  { id: 'spinach', name: 'Spinach', emoji: '🥬', category: 'vegetables' },
  { id: 'cabbage', name: 'Cabbage', emoji: '🥬', category: 'vegetables' },
  { id: 'mushroom', name: 'Mushroom', emoji: '🍄', category: 'vegetables' },
  { id: 'corn', name: 'Corn', emoji: '🌽', category: 'vegetables' },
  { id: 'celery', name: 'Celery', emoji: '🥬', category: 'vegetables' },
  { id: 'lettuce', name: 'Lettuce', emoji: '🥬', category: 'vegetables' },
  { id: 'eggplant', name: 'Eggplant', emoji: '🍆', category: 'vegetables' },
  { id: 'green-beans', name: 'Green Beans', emoji: '🫛', category: 'vegetables' },
  { id: 'scallion', name: 'Scallion', emoji: '🧅', category: 'vegetables' },
  { id: 'ginger', name: 'Ginger', emoji: '🫚', category: 'vegetables' },
  // Staples
  { id: 'noodles', name: 'Noodles', emoji: '🍜', category: 'staples' },
  { id: 'bread', name: 'Bread', emoji: '🍞', category: 'staples' },
  { id: 'rice', name: 'Rice', emoji: '🍚', category: 'staples' },
  { id: 'instant-noodles', name: 'Instant Noodles', emoji: '🍜', category: 'staples' },
  { id: 'pasta', name: 'Pasta', emoji: '🍝', category: 'staples' },
  { id: 'oats', name: 'Oats', emoji: '🌾', category: 'staples' },
  { id: 'potato-starch', name: 'Potato Starch', emoji: '🥔', category: 'staples' },
  { id: 'tortilla', name: 'Tortilla', emoji: '🌮', category: 'staples' },
  { id: 'rice-noodles', name: 'Rice Noodles', emoji: '🍜', category: 'staples' },
]

interface IngredientSelectorProps {
  selectedIngredients: string[]
  onToggleIngredient: (id: string) => void
}

export default function IngredientSelector({
  selectedIngredients,
  onToggleIngredient,
}: IngredientSelectorProps) {
  const { t } = useTranslation()
  const [showAllVegetables, setShowAllVegetables] = useState(false)
  const [showAllMeats, setShowAllMeats] = useState(false)
  const [showAllStaples, setShowAllStaples] = useState(false)

  const vegetables = allIngredients.filter((i) => i.category === 'vegetables')
  const meats = allIngredients.filter((i) => i.category === 'meats')
  const staples = allIngredients.filter((i) => i.category === 'staples')

  const displayedVegetables = showAllVegetables ? vegetables : vegetables.slice(0, 6)
  const displayedMeats = showAllMeats ? meats : meats.slice(0, 6)
  const displayedStaples = showAllStaples ? staples : staples.slice(0, 4)

  const renderIngredientButton = (ingredient: Ingredient) => {
    const isSelected = selectedIngredients.includes(ingredient.id)
    return (
      <button
        key={ingredient.id}
        onClick={() => onToggleIngredient(ingredient.id)}
        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
          isSelected
            ? 'bg-green-500 text-white shadow-md'
            : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
        }`}
      >
        <span className="mr-2">{ingredient.emoji}</span>
        {ingredient.name}
      </button>
    )
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-2">
        👨‍🍳 {t('home.whatsInFridge')}
      </h2>

      {/* Meats */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-3 flex items-center gap-2">
          🥩 {t('ingredients.meats')}
        </h3>
        <div className="flex flex-wrap gap-2">
          {displayedMeats.map(renderIngredientButton)}
        </div>
        {meats.length > 6 && (
          <button
            onClick={() => setShowAllMeats(!showAllMeats)}
            className="mt-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 text-sm"
          >
            {showAllMeats
              ? 'Show Less'
              : `${t('home.loadMore')} (${meats.length - 6} ${t('home.remaining')})`}
          </button>
        )}
      </div>

      {/* Vegetables */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-3 flex items-center gap-2">
          🥬 {t('ingredients.vegetables')}
        </h3>
        <div className="flex flex-wrap gap-2">
          {displayedVegetables.map(renderIngredientButton)}
        </div>
        {vegetables.length > 6 && (
          <button
            onClick={() => setShowAllVegetables(!showAllVegetables)}
            className="mt-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 text-sm"
          >
            {showAllVegetables
              ? 'Show Less'
              : `${t('home.loadMore')} (${vegetables.length - 6} ${t('home.remaining')})`}
          </button>
        )}
      </div>

      {/* Staples */}
      <div>
        <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-3 flex items-center gap-2">
          🍚 {t('ingredients.staples')}
        </h3>
        <div className="flex flex-wrap gap-2">
          {displayedStaples.map(renderIngredientButton)}
        </div>
        {staples.length > 4 && (
          <button
            onClick={() => setShowAllStaples(!showAllStaples)}
            className="mt-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 text-sm"
          >
            {showAllStaples
              ? 'Show Less'
              : `${t('home.loadMore')} (${staples.length - 4} ${t('home.remaining')})`}
          </button>
        )}
      </div>
    </div>
  )
}

