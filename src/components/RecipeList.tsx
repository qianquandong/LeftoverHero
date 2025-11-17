import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import type { Recipe } from '@/data/recipes'
import type { DietaryRestriction } from './FilterPanel'
import RecipeCard from './RecipeCard'

interface RecipeListProps {
  recipes: Recipe[]
  hasSelectedIngredients?: boolean
  featuredRecipes?: Recipe[]
  showFeatured?: boolean
  selectedDietaryRestrictions?: DietaryRestriction[]
}

const RECIPES_PER_PAGE = 6

export default function RecipeList({ 
  recipes, 
  hasSelectedIngredients = false,
  featuredRecipes = [],
  showFeatured = false,
  selectedDietaryRestrictions = []
}: RecipeListProps) {
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

  // 如果显示推荐食谱
  if (showFeatured && featuredRecipes.length > 0 && !hasSelectedIngredients) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2 flex items-center gap-2">
          ⭐ {t('home.recipesOfTheDay')}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm">
          {t('home.recipesOfTheDayDescription')}
        </p>

        {/* Featured Recipes List */}
        <div className="space-y-4">
          {featuredRecipes.map((recipe) => (
            <RecipeCard 
              key={recipe.id} 
              recipe={recipe} 
              selectedDietaryRestrictions={selectedDietaryRestrictions}
            />
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
        🍴 {t('home.recipesYouCanMake')}
      </h2>
      
      {recipes.length > 0 ? (
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          {recipes.length} {t('home.recipesFound')}
        </p>
      ) : null}

      {/* Recipe List Area */}
      <div className="space-y-4">
        {displayedRecipes.length > 0 ? (
          displayedRecipes.map((recipe) => (
            <RecipeCard 
              key={recipe.id} 
              recipe={recipe} 
              selectedDietaryRestrictions={selectedDietaryRestrictions}
            />
          ))
        ) : (
          <div className="text-center text-gray-400 dark:text-gray-500 py-12">
            {hasSelectedIngredients ? (
              <p>{t('home.noRecipesFound')}</p>
            ) : (
              <p className="text-lg">{t('home.selectIngredientsPrompt')}</p>
            )}
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

