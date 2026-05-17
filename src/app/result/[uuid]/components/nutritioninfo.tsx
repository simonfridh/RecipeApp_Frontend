
import {Nutrition} from "@/shared/types/nutrition";

type Properties = {
    nutrition: Nutrition
    className?: string
}


export function NutritionInfo({ nutrition, className}: Properties) {
    return (
        <div className={`flex flex-col flex-1 rounded p-2 ring-inset ring-tertiary ring-2 ${className}`}>
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