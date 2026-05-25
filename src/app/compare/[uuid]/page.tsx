import { mapRecipe } from "@/shared/mapper/maprecipe";
import { IngredientList } from "@/shared/components/recipe/ingredientlist";
import { InstructionList } from "@/shared/components/recipe/instructionlist";
import { NutritionInfo } from "@/shared/components/recipe/nutritioninfo";
import { RecipeTitle } from "@/shared/components/recipe/recipetitle";

type UrlParams = {
    params: Promise<{ uuid: string }>
}

export default async function compare({ params }: UrlParams) {
    const { uuid } = await params

    const response = await fetch(`${process.env.BACKEND_URL}/recipe/${uuid}/comparison`)
    if (!response.ok) {
        const error = await response.json()
        throw new Error(error.detail)
    }
    const comparisonData = await response.json()
    if (!comparisonData.generated_recipe || !comparisonData.original_recipe) {
        const error = await response.json()
        throw new Error(error.detail)
    }
    const generatedRecipe = mapRecipe(comparisonData.generated_recipe)
    const originalRecipe = mapRecipe(comparisonData.original_recipe)
    const similarity = parseFloat(comparisonData.similarity)

    return (
        <main>
            <div className="flex flex-col gap-2 items-center justify-center min-h-dvh w-full p-6">
                <div className="flex flex-row gap-2 w-full">
                    <RecipeTitle recipe={generatedRecipe} similarity={similarity} className="flex-1"/>
                    <RecipeTitle recipe={originalRecipe} similarity={1} className="flex-1" />
                </div>

                <div className="flex flex-row gap-2 w-full">
                    <div className="flex flex-col flex-1 gap-2">
                        <p>Ingredients</p>
                        <IngredientList ingredients={generatedRecipe.ingredients} />
                    </div>
                    <div className="flex flex-col flex-1 gap-2">
                        <p>Ingredients</p>
                        <IngredientList ingredients={originalRecipe.ingredients} />
                    </div>
                </div>
                <div className="flex flex-row gap-2 w-full">
                    <div className="flex flex-col flex-1 gap-2">
                        <p>Cooking Instructions</p>
                        <InstructionList instructions={generatedRecipe.instructions} />
                    </div>
                    <div className="flex flex-col flex-1 gap-2">
                        <p>Cooking Instructions</p>
                        <InstructionList instructions={originalRecipe.instructions} />
                    </div>
                </div>

                <div className="flex flex-row gap-2 w-full">
                    <div className="flex flex-col flex-1 gap-2">
                        {generatedRecipe.nutrition &&
                            <div className="flex flex-col flex-1">
                                <p>Nutritional information</p>
                                <NutritionInfo nutrition={generatedRecipe.nutrition} />
                            </div>
                        }
                    </div>
                    <div className="flex flex-col flex-1 gap-2">
                        {originalRecipe.nutrition &&
                            <div className="flex flex-col flex-1">
                                <p>Nutritional information</p>
                                <NutritionInfo nutrition={originalRecipe.nutrition} />
                            </div>
                        }
                    </div>
                </div>
            </div>
        </main>
    );
}