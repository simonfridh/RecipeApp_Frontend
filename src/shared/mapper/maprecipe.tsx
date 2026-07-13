import {Recipe} from "@/shared/types/recipe";
import {Ingredient} from "@/shared/types/ingredient";
import {Instruction} from "@/shared/types/instruction";
import {Nutrition} from "@/shared/types/nutrition";


export function mapRecipe(data: unknown): Recipe {
    const recipeData = data as Record<string, unknown>
    return {
        name: typeof recipeData.name === "string" ? recipeData.name : "",
        url: typeof recipeData.url === "string" ? recipeData.url : "",
        totalTime: typeof recipeData.total_time === "string" ? recipeData.total_time : null,
        cookingMethod: typeof recipeData.cooking_method === "string" ? recipeData.cooking_method : null,
        recipeCategory: typeof recipeData.recipe_category === "string" ? recipeData.recipe_category : null,
        recipeCuisine: typeof recipeData.recipe_cuisine === "string" ? recipeData.recipe_cuisine : null,
        recipeYield: typeof recipeData.recipe_yield === "string" ? recipeData.recipe_yield : null,
        ingredients: Array.isArray(recipeData.ingredients) ? recipeData.ingredients.map(mapIngredient) : [],
        instructions: Array.isArray(recipeData.instructions) ? recipeData.instructions.map(mapInstruction) : [],
        nutrition: recipeData.nutrition !== null && typeof recipeData.nutrition === "object" ? mapNutrition(recipeData.nutrition) : null
    }
}

function mapIngredient(data: unknown): Ingredient  {
    const ingredientData = data as Record<string, unknown>
    return {
        rawString: typeof ingredientData.raw_string === "string" ? ingredientData.raw_string : "",
        name: typeof ingredientData.name === "string" ? ingredientData.name : null,
        quantity: typeof ingredientData.quantity === "string" ? ingredientData.quantity : null,
        unit: typeof ingredientData.unit === "string" ? ingredientData.unit : null,
        gramsEstimate: typeof ingredientData.grams_estimate === "number" ? ingredientData.grams_estimate : null,
    }
}

function mapInstruction(data: unknown): Instruction {
    const instructionData = data as Record<string, unknown>
    return {
        step: typeof instructionData.step === "number" ? instructionData.step : -1,
        text: typeof instructionData.text === "string" ? instructionData.text : ""
    }
}

function mapNutrition(data: unknown): Nutrition {
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