import { useState } from "react"

const RecipeForm = ({ onSubmit, loading }) => {
    const [ingredients, setIngredients] = useState("")
    const [cuisine, setCuisine] = useState("")
    const [difficulty, setDifficulty] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!ingredients.trim()) return
        onSubmit({ ingredients, cuisine, difficulty })
    }

    return (
        <form className="recipe-form" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="ingredients">Bahan yang tersedia</label>
                <div className="input-wrapper">
                    <i className="bi bi-basket2"></i>
                    <textarea
                        id="ingredients"
                        placeholder="Contoh: ayam, bawang putih, kecap, cabai..."
                        value={ingredients}
                        onChange={(e) => setIngredients(e.target.value)}
                        rows={3}
                        required
                    />
                </div>
            </div>

            <div className="form-row">
                <div className="form-group">
                    <label htmlFor="cuisine">Jenis Masakan</label>
                    <div className="input-wrapper">
                        <i className="bi bi-globe-asia-australia"></i>
                        <select
                        id="cuisine"
                        value={cuisine}
                        onChange={(e) => setCuisine(e.target.value)}
                        >
                            <option value="">Semua</option>
                            <option value="Indonesia">Indonesia</option>
                            <option value="Jepang">Jepang</option>
                            <option value="Korea">Korea</option>
                            <option value="Italia">Italia</option>
                            <option value="China">China</option>
                            <option value="Thailand">Thailand</option>
                        </select>
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="difficulty">Kesulitan</label>
                    <div className="input-wrapper">
                        <i className="bi bi-speedometer2"></i>
                        <select
                        id="difficulty"
                        value={difficulty}
                        onChange={(e) => setDifficulty(e.target.value)}
                        >
                            <option value="">Semua</option>
                            <option value="Mudah">Mudah</option>
                            <option value="Sedang">Sedang</option>
                            <option value="Sulit">Sulit</option>
                        </select>
                    </div>
                </div>
            </div>

            <button type="submit" disabled={loading}>
                {loading ? (
                <>
                    <i className="bi bi-hourglass-split"></i>
                    Membuat Resep...
                </>
                ) : (
                <>
                    <i className="bi bi-stars"></i>
                    Generate Resep
                </>
                )}
            </button>
        </form>
    )
}

export default RecipeForm