import { useState, useMemo } from 'react'
import Header from '@/components/Header'
import IngredientSelector from '@/components/IngredientSelector'
import FilterPanel from '@/components/FilterPanel'
import type { CookingMethod, DietaryRestriction } from '@/components/FilterPanel'
import RecipeList from '@/components/RecipeList'
import { matchRecipes, getRecipesOfTheDay } from '@/data/recipes'

export default function HomePage() {
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([])
  const [selectedCookingMethods, setSelectedCookingMethods] = useState<CookingMethod[]>([])
  const [selectedDietaryRestrictions, setSelectedDietaryRestrictions] = useState<DietaryRestriction[]>([])

  const handleToggleIngredient = (id: string) => {
    setSelectedIngredients((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    )
  }

  const handleToggleCookingMethod = (method: CookingMethod) => {
    setSelectedCookingMethods((prev) =>
      prev.includes(method) ? prev.filter((m) => m !== method) : [...prev, method]
    )
  }

  const handleToggleDietaryRestriction = (restriction: DietaryRestriction) => {
    setSelectedDietaryRestrictions((prev) =>
      prev.includes(restriction) ? prev.filter((r) => r !== restriction) : [...prev, restriction]
    )
  }

  const handleReset = () => {
    setSelectedIngredients([])
    setSelectedCookingMethods([])
    setSelectedDietaryRestrictions([])
  }

  // Match recipes based on selected ingredients, cooking methods, and dietary restrictions
  const matchedRecipes = useMemo(() => {
    return matchRecipes(selectedIngredients, selectedCookingMethods, selectedDietaryRestrictions)
  }, [selectedIngredients, selectedCookingMethods, selectedDietaryRestrictions])

  // Get featured recipes of the day
  const featuredRecipes = useMemo(() => {
    return getRecipesOfTheDay()
  }, [])

  // 判断是否应该显示推荐食谱：只有在没有任何选择时才显示
  const shouldShowFeatured = selectedIngredients.length === 0 && 
                              selectedCookingMethods.length === 0 && 
                              selectedDietaryRestrictions.length === 0

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header
        selectedCount={selectedIngredients.length}
        onReset={handleReset}
      />
      <div className="container mx-auto px-6 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Column - Ingredient Selector and Filters */}
          <div className="space-y-6">
            <FilterPanel
              selectedCookingMethods={selectedCookingMethods}
              selectedDietaryRestrictions={selectedDietaryRestrictions}
              onToggleCookingMethod={handleToggleCookingMethod}
              onToggleDietaryRestriction={handleToggleDietaryRestriction}
            />
            <IngredientSelector
              selectedIngredients={selectedIngredients}
              onToggleIngredient={handleToggleIngredient}
            />
          </div>

          {/* Right Column - Recipe List */}
          <div>
            <RecipeList 
              recipes={matchedRecipes} 
              hasSelectedIngredients={selectedIngredients.length > 0 || selectedCookingMethods.length > 0 || selectedDietaryRestrictions.length > 0}
              featuredRecipes={featuredRecipes}
              showFeatured={shouldShowFeatured}
              selectedDietaryRestrictions={selectedDietaryRestrictions}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

