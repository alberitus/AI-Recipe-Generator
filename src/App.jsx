import { useState } from "react"
import RecipeForm from "./components/RecipeForm"
import RecipeResult from "./components/RecipeResult"
import LoadingSpinner from "./components/LoadingSpinner"
import useRecipeGenerator from "./hooks/useRecipeGenerator"
import "./App.css"

function App() {
  const { recipe, loading, error, generateRecipe } = useRecipeGenerator()

  return (
    <div className="app">
      <header>
        <div className="header-badge">
          <i className="bi bi-stars"></i>
          Powered by Gemini AI
        </div>
        <h1>AI Recipe Generator</h1>
        <p>Masukkan bahan yang kamu punya, AI akan buatkan resepnya!</p>
      </header>

      <main>
        <RecipeForm onSubmit={generateRecipe} loading={loading} />
        {loading && <LoadingSpinner />}
        {error && (
          <p className="error">
            <i className="bi bi-exclamation-circle-fill"></i>
            {error}
          </p>
        )}
        {recipe && <RecipeResult recipe={recipe} />}
      </main>
    </div>
  )
}

export default App