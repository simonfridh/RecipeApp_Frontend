"use server"

import { redirect } from "next/navigation"

export type PostRecipeUrlActionState = {
    error?: string
}

export async function postRecipeUrl(_prevState: PostRecipeUrlActionState, formData: FormData): Promise<PostRecipeUrlActionState> {
    const recipeUrl = formData.get("recipeUrl")
    if (!recipeUrl || typeof recipeUrl !== "string") {
        return { error: "Recipe URL is missing" }
    }

    const response = await fetch(`${process.env.BACKEND_URL}/recipe/optimize`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            url: recipeUrl,
        }),
    })
    if (!response.ok) {
        const error = await response.json()
        return { error: error.detail }
    }

    const data = await response.json()
    if (!data.uuid || typeof data.uuid !== "string") {
        return { error: "Recipe uuid is missing" }
    }

    redirect(`/result/${data.uuid}`)
}