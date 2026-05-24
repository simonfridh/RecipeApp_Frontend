import { mapRecipe } from "@/shared/mapper/maprecipe";
import { IngredientList } from "@/shared/components/recipe/ingredientlist";
import { InstructionList } from "@/shared/components/recipe/instructionlist";
import { NutritionInfo } from "@/shared/components/recipe/nutritioninfo";
import { RecipeTitle } from "@/shared/components/recipe/recipetitle";

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
        <main>
            <div className="flex flex-col gap-2 items-center justify-center min-h-dvh w-full p-6">
                <div className="flex flex-col gap-0 items-center justify-center">
                    <RecipeTitle recipe={recipe} />
                    <div className="flex flex-row gap-2">
                        <a href={recipe.url} className="text-sm underline underline-offset-2 text-primary hover:text-secondary">
                            View original recipe
                        </a>
                        <p>|</p>
                        <a href={"/compare/"+uuid} className="text-sm underline underline-offset-2 text-primary hover:text-secondary">
                            Compare with original recipe
                        </a>
                    </div>

                </div>
                <div className="flex flex-row gap-2 w-full">
                    <div className="flex flex-col flex-1 gap-2">
                        <p>Ingredients</p>
                        <IngredientList ingredients={recipe.ingredients} />
                    </div>
                    <div className="flex flex-col flex-1 gap-2">
                        <p>Cooking Instructions</p>
                        <InstructionList instructions={recipe.instructions} />
                    </div>
                </div>
                {recipe.nutrition &&
                    <div className="flex flex-col w-full">
                        <p>Nutritional information</p>
                        <NutritionInfo nutrition={recipe.nutrition} />
                    </div>
                }
            </div>
        </main>
    );
}