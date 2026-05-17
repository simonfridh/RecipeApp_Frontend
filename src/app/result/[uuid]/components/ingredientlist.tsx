import {Ingredient} from "@/shared/types/ingredient";

type Properties = {
    ingredients: Ingredient[]
    className?: string
}

export function IngredientList({ ingredients,className }: Properties) {
    return(
        <ul className={`flex flex-col flex-1 rounded p-2 ring-inset ring-tertiary ring-2 ${className}`}>
            {
                ingredients.map((ingredient, index) => {
                    const structuredIngredient = ingredient.name !== null && ingredient.quantity !== null && ingredient.unit !== null
                    return (
                        <li key={index}> {
                            structuredIngredient ? `${ingredient.quantity} ${ingredient.name} ${ingredient.unit}` : ingredient.rawString
                        } </li>
                    )
                })
            }
        </ul>
    )
}