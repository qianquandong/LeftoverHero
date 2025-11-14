import { useState } from 'react'
import { useTranslation } from 'react-i18next'

interface Ingredient {
  id: string
  name: string
  emoji: string
  category: 'vegetables' | 'meats' | 'staples'
}

const allIngredients: Ingredient[] = [
  // Vegetables
  { id: 'potato', name: 'Potato', emoji: '🥔', category: 'vegetables' },
  { id: 'carrot', name: 'Carrot', emoji: '🥕', category: 'vegetables' },
  { id: 'broccoli', name: 'Broccoli', emoji: '🥦', category: 'vegetables' },
  { id: 'radish', name: 'White Radish', emoji: '🥬', category: 'vegetables' },
  { id: 'zucchini', name: 'Zucchini', emoji: '🥒', category: 'vegetables' },
  { id: 'tomato', name: 'Tomato', emoji: '🍅', category: 'vegetables' },
  // Meats
  { id: 'lunch-meat', name: 'Lunch Meat', emoji: '🥓', category: 'meats' },
  { id: 'sausage', name: 'Sausage', emoji: '🌭', category: 'meats' },
  { id: 'bacon', name: 'Bacon', emoji: '🥓', category: 'meats' },
  { id: 'chicken', name: 'Chicken', emoji: '🍗', category: 'meats' },
  { id: 'pork', name: 'Pork', emoji: '🐷', category: 'meats' },
  { id: 'egg', name: 'Egg', emoji: '🥚', category: 'meats' },
  // Staples
  { id: 'noodles', name: 'Noodles', emoji: '🍜', category: 'staples' },
  { id: 'bread', name: 'Bread', emoji: '🍞', category: 'staples' },
  { id: 'rice', name: 'Rice', emoji: '🍚', category: 'staples' },
  { id: 'instant-noodles', name: 'Instant Noodles', emoji: '🍜', category: 'staples' },
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

  const vegetables = allIngredients.filter((i) => i.category === 'vegetables')
  const meats = allIngredients.filter((i) => i.category === 'meats')
  const staples = allIngredients.filter((i) => i.category === 'staples')

  const displayedVegetables = showAllVegetables ? vegetables : vegetables.slice(0, 6)
  const displayedMeats = showAllMeats ? meats : meats.slice(0, 6)

  const renderIngredientButton = (ingredient: Ingredient) => {
    const isSelected = selectedIngredients.includes(ingredient.id)
    return (
      <button
        key={ingredient.id}
        onClick={() => onToggleIngredient(ingredient.id)}
        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
          isSelected
            ? 'bg-green-500 text-white shadow-md'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}
      >
        <span className="mr-2">{ingredient.emoji}</span>
        {ingredient.name}
      </button>
    )
  }

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 h-full">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
        👨‍🍳 {t('home.whatsInFridge')}
      </h2>

      {/* Vegetables */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-700 mb-3 flex items-center gap-2">
          🥬 {t('ingredients.vegetables')}
        </h3>
        <div className="flex flex-wrap gap-2">
          {displayedVegetables.map(renderIngredientButton)}
        </div>
        {vegetables.length > 6 && (
          <button
            onClick={() => setShowAllVegetables(!showAllVegetables)}
            className="mt-2 text-gray-500 hover:text-gray-700 text-sm"
          >
            {showAllVegetables
              ? 'Show Less'
              : `${t('home.loadMore')} (${vegetables.length - 6} ${t('home.remaining')})`}
          </button>
        )}
      </div>

      {/* Meats & Proteins */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-700 mb-3 flex items-center gap-2">
          🥩 {t('ingredients.meats')}
        </h3>
        <div className="flex flex-wrap gap-2">
          {displayedMeats.map(renderIngredientButton)}
        </div>
        {meats.length > 6 && (
          <button
            onClick={() => setShowAllMeats(!showAllMeats)}
            className="mt-2 text-gray-500 hover:text-gray-700 text-sm"
          >
            {showAllMeats
              ? 'Show Less'
              : `${t('home.loadMore')} (${meats.length - 6} ${t('home.remaining')})`}
          </button>
        )}
      </div>

      {/* Staples */}
      <div>
        <h3 className="text-lg font-semibold text-gray-700 mb-3 flex items-center gap-2">
          🍚 {t('ingredients.staples')}
        </h3>
        <div className="flex flex-wrap gap-2">
          {staples.map(renderIngredientButton)}
        </div>
      </div>
    </div>
  )
}

