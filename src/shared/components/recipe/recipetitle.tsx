import {Recipe} from "src/shared/types/recipe";


type Properties = {
    recipe: Recipe;
    className?: string
}

export function RecipeTitle({ recipe,className }: Properties) {
    return (
        <div className={`flex flex-col gap-0 items-center justify-center p-4 ${className}`}>
            <h1 className="text-2xl md:text-2xl font-bold">
                {recipe.name}
            </h1>
            <div className="flex flex-row gap-2">
                {recipe.recipeCategory && <p>{recipe.recipeCategory} |</p>}
                {recipe.totalTime && <p>Estimated time: {recipe.totalTime} |</p>}
                {recipe.recipeCuisine && <p>{recipe.recipeCuisine} |</p>}
                {recipe.recipeYield && <p>Yields: {recipe.recipeYield}</p>}
            </div>
            <a href={recipe.url} className="text-sm underline underline-offset-2 text-primary hover:text-secondary">
                View original recipe
            </a>
        </div>
    )
}