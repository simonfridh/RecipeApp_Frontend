import {Recipe} from "@/shared/types/recipe";

type Properties = {
    recipe: Recipe
}

export function RecipeInfo({recipe}: Properties) {
    return(
        <div className="rounded-2xl bg-black border border-gray-200 p-4 shadow-sm">
            {recipe.totalTime && <p>{recipe.totalTime}</p>}
            {recipe.cookingMethod && <p>{recipe.cookingMethod}</p>}
            {recipe.recipeCategory && <p>{recipe.recipeCategory}</p>}
            {recipe.recipeCuisine && <p>{recipe.recipeCuisine}</p>}
            {recipe.recipeYield && <p>{recipe.recipeYield}</p>}
        </div>
    )
}