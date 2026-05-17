import {Ingredient} from "@/shared/types/ingredient";

type Properties = {
    ingredients: Ingredient[];
}

export function IngredientList({ ingredients }: Properties) {
    return(
        <ul>
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