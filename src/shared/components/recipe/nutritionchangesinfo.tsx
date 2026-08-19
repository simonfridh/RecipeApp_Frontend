import {twMerge} from "tailwind-merge"
import {NutritionChanges} from "@/shared/types/nutritionchanges";

type Properties = {
    nutrition: NutritionChanges
    className?: string
}


export function NutritionChangesInfo({ nutrition, className}: Properties) {
    return (
        <div className={twMerge("flex flex-col flex-1 rounded p-2 ring-inset ring-tertiary ring-2", className)}>
            {nutrition.calories &&
                <div className="flex flex-row gap-1">
                    <p>Calories:</p>
                    <p className={nutrition.calories < 0 ? "text-primary" : "text-red-500"}>{nutrition.calories.toFixed(1) + "%"}</p>
                </div>
            }
            {nutrition.carbohydrates && <p>Carbohydrates: {nutrition.carbohydrates.toFixed(1) + "%"}</p>}
            {nutrition.cholesterol && <p>Cholesterol: {nutrition.cholesterol.toFixed(1) + "%"}</p>}
            {nutrition.fat && <p>Fat: {nutrition.fat.toFixed(1) + "%"}</p>}
            {nutrition.fiber &&
                <div className="flex flex-row gap-1">
                    <p>Fiber:</p>
                    <p className={nutrition.fiber > 0 ? "text-primary" : "text-red-500"}>
                        {nutrition.fiber.toFixed(1)}%
                    </p>
                </div>
            }
            {nutrition.protein &&
                <div className="flex flex-row gap-1">
                    <p>Protein:</p>
                    <p className={nutrition.protein > 0 ? "text-primary" : "text-red-500"}>
                        {nutrition.protein.toFixed(1)}%
                    </p>
                </div>
            }
            {nutrition.saturatedFat &&
                <div className="flex flex-row gap-1">
                    <p>Saturated Fat:</p>
                    <p className={nutrition.saturatedFat < 0 ? "text-primary" : "text-red-500"}>
                        {nutrition.saturatedFat.toFixed(1)}%
                    </p>
                </div>
            }
            {nutrition.sodium &&
                <div className="flex flex-row gap-1">
                    <p>Sodium:</p>
                    <p className={nutrition.sodium < 0 ? "text-primary" : "text-red-500"}>
                        {nutrition.sodium.toFixed(1)}%
                    </p>
                </div>
            }
            {nutrition.sugar &&
                <div className="flex flex-row gap-1">
                    <p>Sugar:</p>
                    <p className={nutrition.sugar < 0 ? "text-primary" : "text-red-500"}>
                        {nutrition.sugar.toFixed(1)}%
                    </p>
                </div>
            }
            {nutrition.transFat && <p>Trans fat: {nutrition.transFat.toFixed(1) + "%"}</p>}
            {nutrition.unsaturatedFat && <p>Unsaturated fat: {nutrition.unsaturatedFat.toFixed(1) + "%"}</p>}
        </div>
    )
}