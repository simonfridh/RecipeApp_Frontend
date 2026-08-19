
import {mapNutrition} from "@/shared/mapper/mapnutrition";
import {Evaluation} from "@/shared/types/evaluation";
import {NutritionChanges} from "@/shared/types/nutritionchanges";

export function mapEvaluation(data: unknown): Evaluation {
    const evaluationData = data as Record<string, unknown>
    return {
        originalWebNutrition: evaluationData.original_web_nutrition !== null && typeof evaluationData.original_web_nutrition === "object" ? mapNutrition(evaluationData.original_web_nutrition) : null,
        generatedAiNutrition: evaluationData.generated_ai_nutrition !== null && typeof evaluationData.generated_ai_nutrition === "object" ? mapNutrition(evaluationData.generated_ai_nutrition) : null,
        originalCalculatedNutrition: evaluationData.original_calculated_nutrition !== null && typeof evaluationData.original_calculated_nutrition === "object" ? mapNutrition(evaluationData.original_calculated_nutrition) : null,
        generatedCalculatedNutrition: evaluationData.generated_calculated_nutrition !== null && typeof evaluationData.generated_calculated_nutrition === "object" ? mapNutrition(evaluationData.generated_calculated_nutrition) : null,
        aiNutritionChanges: evaluationData.ai_nutrition_changes !== null && typeof evaluationData.ai_nutrition_changes === "object" ? mapNutritionChanges(evaluationData.ai_nutrition_changes) : null,
        calculatedNutritionChanges: evaluationData.calculated_nutrition_changes !== null && typeof evaluationData.calculated_nutrition_changes === "object" ? mapNutritionChanges(evaluationData.calculated_nutrition_changes) : null,
        cosineSimilarity: typeof evaluationData.cosine_similarity === "number" ? evaluationData.cosine_similarity : null,
        ingredientOverlap: typeof evaluationData.ingredient_overlap === "number" ? evaluationData.ingredient_overlap : null,
    }
}

function mapNutritionChanges(data: unknown): NutritionChanges {
    const nutritionChangeData = data as Record<string, unknown>
    return {
        calories: typeof nutritionChangeData.calories === "number" ? nutritionChangeData.calories : null,
        carbohydrates: typeof nutritionChangeData.carbohydrates === "number" ? nutritionChangeData.carbohydrates : null,
        cholesterol: typeof nutritionChangeData.cholesterol === "number" ? nutritionChangeData.cholesterol : null,
        fat: typeof nutritionChangeData.fat === "number" ? nutritionChangeData.fat : null,
        fiber: typeof nutritionChangeData.fiber === "number" ? nutritionChangeData.fiber : null,
        protein: typeof nutritionChangeData.protein === "number" ? nutritionChangeData.protein : null,
        saturatedFat: typeof nutritionChangeData.saturated_fat === "number" ? nutritionChangeData.saturated_fat : null,
        sodium: typeof nutritionChangeData.sodium === "number" ? nutritionChangeData.sodium : null,
        sugar: typeof nutritionChangeData.sugar === "number" ? nutritionChangeData.sugar : null,
        transFat: typeof nutritionChangeData.trans_fat === "number" ? nutritionChangeData.trans_fat : null,
        unsaturatedFat: typeof nutritionChangeData.unsaturated_fat === "number" ? nutritionChangeData.unsaturated_fat : null,
    }
}