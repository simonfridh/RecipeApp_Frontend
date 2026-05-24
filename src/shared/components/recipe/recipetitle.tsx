import {twMerge} from "tailwind-merge";
import {Recipe} from "src/shared/types/recipe";


type Properties = {
    recipe: Recipe;
    className?: string
}

export function RecipeTitle({ recipe,className }: Properties) {
    return (
        <div className={twMerge("flex flex-col gap-0 items-center justify-center",className)}>
            <h1 className="text-2xl md:text-2xl font-bold">
                {recipe.name}
            </h1>
            <div className="flex flex-row gap-2">
                {recipe.recipeCategory && <p>{recipe.recipeCategory} |</p>}
                {recipe.totalTime && <p>Estimated time: {formatTotalTime(recipe.totalTime)} |</p>}
                {recipe.recipeCuisine && <p>{recipe.recipeCuisine} |</p>}
                {recipe.recipeYield && <p>Yields: {recipe.recipeYield}</p>}
            </div>
        </div>
    )
}

function formatTotalTime(totalTime: string): string {
    const regex = /PT(?:(\d+)H)?(?:(\d+)M)?/
    const match = totalTime.match(regex)
    if (!match) return totalTime;

    const hours = match[1]
        ? `${match[1]} ${match[1] == "1" ? "hour" : "hours"}`
        : ""
    const minutes = match[2]
        ? `${match[2]} ${match[2] == "1" ? "minute" : "minutes"}`
        : ""

    return `${hours} ${minutes}`;
}