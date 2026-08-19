import {Nutrition} from "@/shared/types/nutrition"
import {NutritionChanges} from "@/shared/types/nutritionchanges"

export type Evaluation = {
    originalWebNutrition: Nutrition | null
    generatedAiNutrition: Nutrition | null
    originalCalculatedNutrition: Nutrition | null
    generatedCalculatedNutrition: Nutrition | null

    aiNutritionChanges: NutritionChanges | null
    calculatedNutritionChanges: NutritionChanges | null

    cosineSimilarity: number | null
    ingredientOverlap: number | null
}