const RecipeResult = ({ recipe }) => {
    return (
        <div className="recipe-result">
            <div className="recipe-header">
                <h2>{recipe.name}</h2>
                <p className="recipe-description">{recipe.description}</p>
                <div className="recipe-meta">
                    <span className="meta-chip">
                        <i className="bi bi-clock"></i> {recipe.duration}
                    </span>
                    <span className="meta-chip">
                        <i className="bi bi-speedometer2"></i> {recipe.difficulty}
                    </span>
                    <span className="meta-chip">
                        <i className="bi bi-people"></i> {recipe.servings}
                    </span>
                </div>
            </div>
    
            <div className="recipe-body">
                <div className="recipe-ingredients">
                    <h3><i className="bi bi-basket2"></i> Bahan-bahan</h3>
                    <ul>
                        {recipe.ingredients.map((item, i) => (
                            <li key={i}>
                                <i className="bi bi-check-circle-fill"></i> {item}
                            </li>
                        ))}
                    </ul>
                </div>
        
                <div className="recipe-steps">
                    <h3><i className="bi bi-list-ol"></i> Langkah Memasak</h3>
                    <ol>
                    {recipe.steps.map((step, i) => (
                        <li key={i}>
                            <span className="step-number">{i + 1}</span>
                            <p>{step}</p>
                        </li>
                    ))}
                    </ol>
                </div>
            </div>
    
            {recipe.tips && (
                <div className="recipe-tips">
                    <i className="bi bi-lightbulb-fill"></i>
                    <p><strong>Tips:</strong> {recipe.tips}</p>
                </div>
            )}
        </div>
    )
}

export default RecipeResult