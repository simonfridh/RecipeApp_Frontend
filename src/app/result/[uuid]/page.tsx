import {IngredientList} from "@/app/result/[uuid]/components/ingredientlist";
import {InstructionList} from "@/app/result/[uuid]/components/instructionlist";
import {mapRecipe} from "@/shared/mapper/maprecipe";
import {NutritionInfo} from "@/app/result/[uuid]/components/nutritioninfo";
import {RecipeInfo} from "@/app/result/[uuid]/components/recipeinfo";

type UrlParams = {
    params: Promise<{ uuid: string }>
}

export default async function result({ params }: UrlParams) {
    const { uuid } = await params

    const response = await fetch(`${process.env.BACKEND_URL}/recipe/${uuid}`)
    if (!response.ok) {
        const error = await response.json()
        throw new Error(error.detail)
    }
    const recipeData = await response.json()
    const recipe = mapRecipe(recipeData)

    return (
        <main className="bg-blue">
            <div className="flex flex-col items-center justify-center min-h-dvh w-full p-4">
                <header>
                    <h1 className="text-2xl font-bold">
                        {recipe.name}
                    </h1>
                    <a href={recipe.url} className="text-sm underline underline-offset-2 text-orange-500 hover:text-orange-300">
                        View original recipe
                    </a>
                </header>




                <div>
                    <p>Recipe Info</p>
                    <RecipeInfo recipe={recipe} />
                </div>

                <div>
                    <p>Ingredients</p>
                    <IngredientList ingredients={recipe.ingredients} />
                </div>

                <div>
                    <p>Cooking Instructions</p>
                    <InstructionList instructions={recipe.instructions} />
                </div>

                {recipe.nutrition && <div>
                    <p>Nutritional information</p>
                    <NutritionInfo nutrition={recipe.nutrition} />
                </div>}
            </div>
        </main>
    );
}