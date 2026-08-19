import {twMerge} from "tailwind-merge"
import {Ingredient} from "src/shared/types/ingredient"

type Properties = {
    ingredients: Ingredient[]
    className?: string
}

export function IngredientCardList({ ingredients,className }: Properties) {
    return(
        <ul className={twMerge("grid grid-cols-1 flex-1 gap-1", className)}>
            {ingredients.map((ingredient, index) => {
                return (
                    <li
                        key={index}
                        className="p-2 rounded ring-1 ring-inset bg-surface-bright ring-tertiary/50"
                    >
                        {ingredient.rawString}
                    </li>
                )
            })}
        </ul>
    )
}