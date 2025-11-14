import { useNavigate } from 'react-router-dom'
import type { Recipe } from '@/data/recipes'

interface RecipeCardProps {
  recipe: Recipe
}

export default function RecipeCard({ recipe }: RecipeCardProps) {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/recipe/${recipe.id}`)
  }

  return (
    <div
      onClick={handleClick}
      className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 border border-gray-200 dark:border-gray-600 hover:shadow-md transition-shadow cursor-pointer"
    >
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
        {recipe.name}
      </h3>
      <div className="flex flex-wrap gap-2 mb-2">
        {recipe.keyIngredients.map((ingredient, index) => (
          <span
            key={index}
            className="bg-white dark:bg-gray-600 text-gray-600 dark:text-gray-300 text-xs px-2 py-1 rounded-full border border-gray-200 dark:border-gray-500"
          >
            {ingredient}
          </span>
        ))}
      </div>
      {(recipe.cookingMethod && recipe.cookingMethod.length > 0) ||
      (recipe.dietaryRestrictions && recipe.dietaryRestrictions.length > 0) ? (
        <div className="flex flex-wrap gap-2 mt-2">
          {recipe.cookingMethod?.map((method, index) => (
            <span
              key={`method-${index}`}
              className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs px-2 py-1 rounded-full"
            >
              {method}
            </span>
          ))}
          {recipe.dietaryRestrictions?.map((restriction, index) => {
            // 将 'gluten-free' 转换为 'Gluten Free' 格式
            const formatted = restriction
              .split('-')
              .map(word => word.charAt(0).toUpperCase() + word.slice(1))
              .join(' ')
            return (
              <span
                key={`restriction-${index}`}
                className="bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 text-xs px-2 py-1 rounded-full"
              >
                {formatted}
              </span>
            )
          })}
        </div>
      ) : null}
    </div>
  )
}

