import {Ingredient, Recipe} from "@/shared/types/recipe";

type UrlParams = {
    params: Promise<{ id: string }>
}

export default async function result({ params }: UrlParams) {
    const { id } = await params

    const response = await fetch(`${process.env.BACKEND_URL}/recipe/${id}`)
    if (!response.ok) {
        const error = await response.json()
        throw new Error(error.detail)
    }
    const recipe: Recipe = await response.json()

    return (
        <main>
            <div className="flex flex-col items-center justify-center min-h-dvh w-full p-4">

                <h1>{recipe.title}</h1>

                <div>
                    <p>Ingredients</p>
                    <ul>
                        {recipe.ingredients.map((ingredient, index) => (
                            <li key={index}>
                                {ingredient.name}: {ingredient.amount}
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <p>Instructions</p>
                    <ul>
                        {recipe.instructions.map((instruction, index) => (
                            <li key={index}>
                                Step {index}: {instruction}
                            </li>
                        ))}
                    </ul>
                </div>


            </div>
        </main>
    );
}

//TODO hämta receptet från servern igen här