import { useState, useMemo } from 'react'
import Header from '@/components/Header'
import IngredientSelector from '@/components/IngredientSelector'
import RecipeList from '@/components/RecipeList'
import FloatingActionButtons from '@/components/FloatingActionButtons'
import { matchRecipes } from '@/data/recipes'

export default function HomePage() {
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([])

  const handleToggleIngredient = (id: string) => {
    setSelectedIngredients((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    )
  }

  const handleReset = () => {
    setSelectedIngredients([])
  }

  // Match recipes based on selected ingredients
  const matchedRecipes = useMemo(() => {
    return matchRecipes(selectedIngredients)
  }, [selectedIngredients])

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        selectedCount={selectedIngredients.length}
        onReset={handleReset}
      />
      <div className="container mx-auto px-6 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Column - Ingredient Selector */}
          <div>
            <IngredientSelector
              selectedIngredients={selectedIngredients}
              onToggleIngredient={handleToggleIngredient}
            />
          </div>

          {/* Right Column - Recipe List */}
          <div>
            <RecipeList recipes={matchedRecipes} />
          </div>
        </div>
      </div>

      {/* Floating Action Buttons */}
      <FloatingActionButtons />
    </div>
  )
}

