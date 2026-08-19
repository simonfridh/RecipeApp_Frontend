import {Nutrition} from "@/shared/types/nutrition";


export function mapNutrition(data: unknown): Nutrition {
    const nutritionData = data as Record<string, unknown>
    return {
        calories: typeof nutritionData.calories === "string" ? nutritionData.calories : null,
        carbohydrates: typeof nutritionData.carbohydrates === "string" ? nutritionData.carbohydrates : null,
        cholesterol: typeof nutritionData.cholesterol === "string" ? nutritionData.cholesterol : null,
        fat: typeof nutritionData.fat === "string" ? nutritionData.fat : null,
        fiber: typeof nutritionData.fiber === "string" ? nutritionData.fiber : null,
        protein: typeof nutritionData.protein === "string" ? nutritionData.protein : null,
        saturatedFat: typeof nutritionData.saturated_fat === "string" ? nutritionData.saturated_fat : null,
        sodium: typeof nutritionData.sodium === "string" ? nutritionData.sodium : null,
        sugar: typeof nutritionData.sugar === "string" ? nutritionData.sugar : null,
        transFat: typeof nutritionData.trans_fat === "string" ? nutritionData.trans_fat : null,
        unsaturatedFat: typeof nutritionData.unsaturated_fat ==="string" ? nutritionData.unsaturated_fat : null,
    }
}