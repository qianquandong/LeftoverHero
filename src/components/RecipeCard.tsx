import type { Recipe } from '@/data/recipes'

interface RecipeCardProps {
  recipe: Recipe
}

export default function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 hover:shadow-md transition-shadow">
      <h3 className="text-lg font-semibold text-gray-800 mb-2">
        {recipe.name}
      </h3>
      <div className="flex flex-wrap gap-2">
        {recipe.keyIngredients.map((ingredient, index) => (
          <span
            key={index}
            className="bg-white text-gray-600 text-xs px-2 py-1 rounded-full border border-gray-200"
          >
            {ingredient}
          </span>
        ))}
      </div>
    </div>
  )
}

