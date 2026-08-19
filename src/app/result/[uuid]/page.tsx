import { mapRecipe } from "@/shared/mapper/maprecipe"
import { RecipeTitle } from "@/shared/components/recipe/recipetitle"
import { ClickableInstructionList } from "@/app/result/[uuid]/_components/clickableinstructionlist"
import { IngredientCardList } from "@/app/result/[uuid]/_components/ingredientcardlist"

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
    const recipe = mapRecipe(recipeData.generated_recipe)
    const similarity = parseFloat(recipeData.similarity)

    return (
        <main>
            <div className="flex flex-col gap-2 items-center justify-center min-h-dvh w-full p-6">
                <div className="flex flex-col gap-0 items-center justify-center">
                    <RecipeTitle recipe={recipe} similarity={similarity} />
                    <div className="flex flex-row gap-2">
                        <a href={recipe.url} className="text-sm underline underline-offset-2 text-primary hover:text-secondary">
                            View original recipe
                        </a>
                        <p>|</p>
                        <a href={"/compare/"+uuid} className="text-sm underline underline-offset-2 text-primary hover:text-secondary">
                            Compare with original recipe
                        </a>
                        <p>|</p>
                        <a href={"/evaluation/"+uuid} className="text-sm underline underline-offset-2 text-primary hover:text-secondary">
                            Evaluation
                        </a>
                    </div>

                </div>
                <div className="flex flex-row gap-8 w-full">
                    <div className="flex flex-col flex-3 gap-2">
                        <p>Ingredients</p>
                        <IngredientCardList ingredients={recipe.ingredients} />
                    </div>
                    <div className="flex flex-col flex-5 gap-2">
                        <p className="text-right">Cooking Instructions</p>
                        <ClickableInstructionList instructions={recipe.instructions} />
                    </div>
                </div>

            </div>
        </main>
    )
}