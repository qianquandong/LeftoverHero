import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import type { Recipe } from '@/data/recipes'
import RecipeCard from './RecipeCard'

interface RecipeListProps {
  recipes: Recipe[]
}

const RECIPES_PER_PAGE = 6

export default function RecipeList({ recipes }: RecipeListProps) {
  const { t } = useTranslation()
  const [displayCount, setDisplayCount] = useState(RECIPES_PER_PAGE)

  // Reset display count when recipes change
  useEffect(() => {
    setDisplayCount(RECIPES_PER_PAGE)
  }, [recipes.length])

  const displayedRecipes = recipes.slice(0, displayCount)
  const remainingCount = recipes.length - displayCount

  const handleLoadMore = () => {
    setDisplayCount((prev) => Math.min(prev + RECIPES_PER_PAGE, recipes.length))
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 h-full">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
        🍴 {t('home.recipesYouCanMake')}
      </h2>
      <p className="text-gray-600 dark:text-gray-400 mb-6">
        {recipes.length} {t('home.recipesFound')}
      </p>

      {/* Recipe List Area */}
      <div className="space-y-4 min-h-[400px]">
        {displayedRecipes.length > 0 ? (
          displayedRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))
        ) : (
          <div className="text-center text-gray-400 dark:text-gray-500 py-20">
            <p>Select ingredients to see matching recipes</p>
          </div>
        )}
      </div>

      {/* Load More Button */}
      {remainingCount > 0 && (
        <div className="mt-6 text-center">
          <button
            onClick={handleLoadMore}
            className="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 px-6 py-2 rounded-full text-sm font-medium transition-colors"
          >
            {t('home.loadMore')} ({remainingCount} {t('home.remaining')})
          </button>
        </div>
      )}
    </div>
  )
}

