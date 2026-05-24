import {twMerge} from "tailwind-merge";
import {Ingredient} from "src/shared/types/ingredient";

type Properties = {
    ingredients: Ingredient[]
    className?: string
}

export function IngredientList({ ingredients,className }: Properties) {
    return(
        <ul className={twMerge("flex flex-col flex-1 rounded p-2 ring-inset ring-tertiary ring-2",className)}>
            {
                ingredients.map((ingredient, index) => {
                    const isStructuredIngredient = ingredient.name !== null && ingredient.quantity !== null && ingredient.unit !== null
                    return (
                        <li key={index}> {
                            isStructuredIngredient
                                ? `• ${ingredient.quantity} ${ingredient.unit} ${ingredient.name} `
                                : `• ${ingredient.rawString}`
                        } </li>
                    )
                })
            }
        </ul>
    )
}