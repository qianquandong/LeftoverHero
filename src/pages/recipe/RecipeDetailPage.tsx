import { useParams, useNavigate, useSearchParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ArrowLeft } from 'lucide-react'
import { recipes, getSubstitutionSuggestions } from '@/data/recipes'
import { recipeDetails } from '@/data/recipeDetails'
import type { DietaryRestriction } from '@/components/FilterPanel'

export default function RecipeDetailPage() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const { t } = useTranslation()
  
  const recipeId = id ? parseInt(id, 10) : null
  const recipe = recipeId ? recipes.find((r) => r.id === recipeId) : null
  const detail = recipeId ? recipeDetails[recipeId] : null
  
  // 从 URL 参数中获取饮食限制
  const restrictionsParam = searchParams.get('restrictions')
  const selectedDietaryRestrictions: DietaryRestriction[] = restrictionsParam 
    ? restrictionsParam.split(',').filter(Boolean) as DietaryRestriction[]
    : []
  
  const substitutions = recipe ? getSubstitutionSuggestions(recipe, selectedDietaryRestrictions) : []

  if (!recipe) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Recipe Not Found</h1>
          <button
            onClick={() => navigate('/')}
            className="text-blue-500 hover:text-blue-600 dark:text-blue-400"
          >
            Go back to home
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-6 py-4">
        <div className="container mx-auto flex items-center gap-4">
          <button
            onClick={() => navigate(-1)}
            className="p-2 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">{recipe.name}</h1>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8 max-w-4xl">
        {/* Recipe Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {detail && (
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm">
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Focus</p>
              <p className="text-lg font-semibold text-gray-800 dark:text-white">{detail.focus}</p>
            </div>
          )}
          {recipe.cookingMethod && recipe.cookingMethod.length > 0 && (
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm">
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Cooking Method</p>
              <div className="flex flex-wrap gap-2">
                {recipe.cookingMethod.map((method, index) => (
                  <span
                    key={index}
                    className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs px-2 py-1 rounded-full"
                  >
                    {method}
                  </span>
                ))}
              </div>
            </div>
          )}
          {recipe.dietaryRestrictions && recipe.dietaryRestrictions.length > 0 && (
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm">
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Dietary</p>
              <div className="flex flex-wrap gap-2">
                {recipe.dietaryRestrictions.map((restriction, index) => {
                  const formatted = restriction
                    .split('-')
                    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(' ')
                  return (
                    <span
                      key={index}
                      className="bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 text-xs px-2 py-1 rounded-full"
                    >
                      {formatted}
                    </span>
                  )
                })}
              </div>
            </div>
          )}
        </div>

        {/* Substitution Suggestions */}
        {substitutions.length > 0 && (
          <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-6 mb-6">
            <h2 className="text-xl font-bold text-amber-800 dark:text-amber-300 mb-3 flex items-center gap-2">
              🔄 {t('substitutions.title')}
            </h2>
            <p className="text-sm text-amber-700 dark:text-amber-400 mb-4">
              {t('substitutions.description')}
            </p>
            <div className="space-y-3">
              {substitutions.map((sub, index) => {
                const restrictionFormatted = sub.restriction
                  .split('-')
                  .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(' ')
                return (
                  <div
                    key={index}
                    className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-amber-200 dark:border-amber-700"
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-amber-600 dark:text-amber-400 font-semibold">
                        {sub.ingredient}
                      </span>
                      <span className="text-gray-400 dark:text-gray-500">→</span>
                      <div className="flex-1">
                        <p className="text-gray-800 dark:text-white font-medium">
                          {sub.substitution}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                          ({restrictionFormatted})
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )}

        {/* Ingredients & Measurements */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 mb-6">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
            Ingredients & Measurements
          </h2>
          {detail && detail.ingredients.length > 0 ? (
            <ul className="space-y-3">
              {detail.ingredients.map((ingredient, index) => {
                // 检查这个食材是否需要替代
                const needsSubstitution = substitutions.some(
                  sub => ingredient.name.toLowerCase().includes(sub.ingredient.toLowerCase()) ||
                         sub.ingredient.toLowerCase().includes(ingredient.name.toLowerCase())
                )
                const substitution = substitutions.find(
                  sub => ingredient.name.toLowerCase().includes(sub.ingredient.toLowerCase()) ||
                         sub.ingredient.toLowerCase().includes(ingredient.name.toLowerCase())
                )
                
                return (
                  <li
                    key={index}
                    className={`flex items-start gap-3 p-3 rounded-lg ${
                      needsSubstitution 
                        ? 'bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700' 
                        : 'bg-gray-50 dark:bg-gray-700'
                    }`}
                  >
                    <span className="text-gray-500 dark:text-gray-400 font-semibold min-w-[2rem]">
                      {index + 1}.
                    </span>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className={`font-medium ${
                          needsSubstitution 
                            ? 'text-amber-700 dark:text-amber-300 line-through' 
                            : 'text-gray-800 dark:text-white'
                        }`}>
                          {ingredient.name}
                        </span>
                        {needsSubstitution && substitution && (
                          <span className="text-xs bg-amber-100 dark:bg-amber-900 text-amber-700 dark:text-amber-300 px-2 py-1 rounded">
                            → {substitution.substitution}
                          </span>
                        )}
                      </div>
                      <span className="text-gray-600 dark:text-gray-400 text-sm">
                        {ingredient.amount}
                      </span>
                    </div>
                  </li>
                )
              })}
            </ul>
          ) : (
            <p className="text-gray-500 dark:text-gray-400">
              Ingredients information not available for this recipe.
            </p>
          )}
        </div>

        {/* Step-by-Step Instructions */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
            Step-by-Step Instructions
          </h2>
          {detail && detail.instructions.length > 0 ? (
            <ol className="space-y-4">
              {detail.instructions.map((instruction) => (
                <li
                  key={instruction.step}
                  className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
                >
                  <span className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                    {instruction.step}
                  </span>
                  <p className="text-gray-800 dark:text-white flex-1 leading-relaxed">
                    {instruction.text}
                  </p>
                </li>
              ))}
            </ol>
          ) : (
            <p className="text-gray-500 dark:text-gray-400">
              Instructions not available for this recipe.
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

