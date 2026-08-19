import {mapEvaluation} from "@/shared/mapper/mapevaluation";
import {Evaluation} from "@/shared/types/evaluation";
import {NutritionInfo} from "@/shared/components/recipe/nutritioninfo";
import {mapRecipe} from "@/shared/mapper/maprecipe";
import {Recipe} from "@/shared/types/recipe";
import {NutritionChangesInfo} from "@/shared/components/recipe/nutritionchangesinfo";

type UrlParams = {
    params: Promise<{ uuid: string }>
}

export default async function compare({ params }: UrlParams) {
    const { uuid } = await params

    const reciperesponse = await fetch(`${process.env.BACKEND_URL}/recipe/${uuid}`)
    let recipe: Recipe | null = null
    if (reciperesponse.ok) {
        const recipeData = await reciperesponse.json()
        recipe = mapRecipe(recipeData.generated_recipe)
    }

    const evaluationresponse = await fetch(`${process.env.BACKEND_URL}/recipe/${uuid}/evaluation`)
    let evaluation: Evaluation | null = null
    if (evaluationresponse.ok) {
        const evaluationData = await evaluationresponse.json()
        evaluation = mapEvaluation(evaluationData)
    }

    return (
        <main>
            <div className="flex flex-col gap-4 min-h-dvh w-full p-6">
                <div className="flex flex-col gap-0 items-center justify-center">
                    <h1 className="text-2xl font-bold">
                        {recipe && recipe.name}
                    </h1>
                    <h1 className="text-xl text-tertiary">
                        Recipe Evaluation
                    </h1>
                </div>

                {evaluation === null ? (
                    <p>Could not load evaluation at this time. Try reloading</p>
                ) : (
                    <div className="flex flex-col w-full gap-2">
                        <div className="flex flex-row gap-10 items-center justify-center p-1 rounded ring-2 ring-inset ring-tertiary">
                            {evaluation.cosineSimilarity && <h1 className="text-xl ">
                                Cosine Similarity: {(evaluation.cosineSimilarity*100).toFixed(1) + "%"}
                            </h1>}

                            {evaluation.ingredientOverlap && <h1 className="text-xl">
                                Ingredient Overlap: {(evaluation.ingredientOverlap*100).toFixed(1) + "%"}
                            </h1>}
                        </div>

                        <div className="grid grid-cols-3 flex-1 gap-5">
                            <div>
                                <p>Original recipe</p>
                                {evaluation.originalCalculatedNutrition && <NutritionInfo nutrition={evaluation.originalCalculatedNutrition}/>}
                            </div>

                            <div>
                                <p>Generated recipe</p>
                                {evaluation.generatedCalculatedNutrition && <NutritionInfo nutrition={evaluation.generatedCalculatedNutrition}/>}
                            </div>
                            <div>
                                <p>Relative Change between generated and original recipe</p>
                                {evaluation.calculatedNutritionChanges && <NutritionChangesInfo nutrition={evaluation.calculatedNutritionChanges}/>}
                            </div>
                            <div>
                                <p>Nutritional content found in original web recipe metadata</p>
                                {evaluation.originalWebNutrition && <NutritionInfo nutrition={evaluation.originalWebNutrition}/>}
                            </div>
                            <div>
                                <p>AI-models estimation of nutritional content in generated recipe</p>
                                {evaluation.generatedAiNutrition && <NutritionInfo nutrition={evaluation.generatedAiNutrition}/>}
                            </div>
                            <div>
                                <p>Relative change between original recipe and AI-model estimations</p>
                                {evaluation.aiNutritionChanges && <NutritionChangesInfo nutrition={evaluation.aiNutritionChanges}/>}
                            </div>

                        </div>


                    </div>



                )}


            </div>
        </main>
    )
}