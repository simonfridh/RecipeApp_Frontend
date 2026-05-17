
import {Nutrition} from "@/shared/types/nutrition";

type Properties = {
    nutrition: Nutrition;
}


export function NutritionInfo({ nutrition }: Properties) {
    return (
        <div>
            {nutrition.calories && <p>Calories: {nutrition.calories}</p>}
            {nutrition.carbohydrates && <p>Carbohydrates: {nutrition.carbohydrates}</p>}
            {nutrition.cholesterol && <p>Cholesterol: {nutrition.cholesterol}</p>}
            {nutrition.fat && <p>Fat: {nutrition.fat}</p>}
            {nutrition.fiber && <p>Fiber: {nutrition.fiber}</p>}
            {nutrition.saturatedFat && <p>Saturated Fat: {nutrition.saturatedFat}</p>}
            {nutrition.sodium && <p>Sodium: {nutrition.sodium}</p>}
            {nutrition.sugar && <p>Sugar: {nutrition.sugar}</p>}
            {nutrition.transFat && <p>Trans fat: {nutrition.transFat}</p>}
            {nutrition.unsaturatedFat && <p>Unsaturated fat: {nutrition.unsaturatedFat}</p>}
        </div>
    )
}