
export type Recipe = {
    title: string,
    ingredients: Ingredient[],
    instructions: string[]
}

export type Ingredient = {
    name: string,
    amount: number,
}