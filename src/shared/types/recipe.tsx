import {Ingredient} from "@/shared/types/ingredient"
import {Instruction} from "@/shared/types/instruction"
import {Nutrition} from "@/shared/types/nutrition"

export type Recipe = {
    name: string
    url: string
    totalTime: string | null
    cookingMethod: string | null
    recipeCategory: string | null
    recipeCuisine: string | null
    recipeYield: string | null

    ingredients: Ingredient[]
    instructions: Instruction[]
    nutrition: Nutrition | null
}