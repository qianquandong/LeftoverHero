import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from '@/pages/home/Page'
import RecipeDetailPage from '@/pages/recipe/RecipeDetailPage'
import NotFound from '@/pages/NotFound'

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipe/:id" element={<RecipeDetailPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

