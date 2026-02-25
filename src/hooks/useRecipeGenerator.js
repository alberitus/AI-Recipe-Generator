import { useState } from "react"
import { GoogleGenerativeAI } from "@google/generative-ai"

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_KEY)
const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" })

const useRecipeGenerator = () => {
    const [recipe, setRecipe] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const generateRecipe = async ({ ingredients, cuisine, difficulty }) => {
        setLoading(true)
        setError(null)
        setRecipe(null)

        const prompt = `
        Kamu adalah chef profesional. Buatkan resep masakan berdasarkan informasi berikut:
        - Bahan yang tersedia: ${ingredients}
        - Jenis masakan: ${cuisine || "bebas"}
        - Tingkat kesulitan: ${difficulty || "sedang"}

        Berikan resep dalam format JSON seperti ini:
        {
            "name": "Nama Resep",
            "description": "Deskripsi singkat",
            "duration": "30 menit",
            "difficulty": "Mudah",
            "servings": "2 porsi",
            "ingredients": ["bahan 1", "bahan 2"],
            "steps": ["langkah 1", "langkah 2"],
            "tips": "Tips memasak"
        }

        Balas HANYA dengan JSON, tanpa teks tambahan.
        `

        try {
        const result = await model.generateContent(prompt)
        const text = result.response.text()
        const clean = text.replace(/```json|```/g, "").trim()
        const parsed = JSON.parse(clean)
        setRecipe(parsed)
        } catch (err) {
        setError("Gagal membuat resep. Coba lagi!")
        console.error(err)
        } finally {
        setLoading(false)
        }
    }

    return { recipe, loading, error, generateRecipe }
}

export default useRecipeGenerator