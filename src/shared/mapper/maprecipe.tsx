import {Recipe} from "@/shared/types/recipe"
import {Ingredient} from "@/shared/types/ingredient"
import {Instruction} from "@/shared/types/instruction"
import {mapNutrition} from "@/shared/mapper/mapnutrition";


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