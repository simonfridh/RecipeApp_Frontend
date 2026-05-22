"use server"

import { redirect } from "next/navigation"

export type PostRecipeUrlActionState = {
    error?: string
    timestamp?: number
}

export async function postRecipeUrl(_prevState: PostRecipeUrlActionState, formData: FormData): Promise<PostRecipeUrlActionState> {
    const recipeUrl = formData.get("recipeUrl")
    if (!recipeUrl || typeof recipeUrl !== "string") {
        return {
            error: "Recipe URL is missing",
            timestamp: Date.now()
        }
    }

    try {
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
            return {
                error: error.detail,
                timestamp: Date.now()
            }
        }

        const data = await response.json()
        if (!data.uuid || typeof data.uuid !== "string") {
            return {
                error: "Recipe uuid is missing",
                timestamp: Date.now()
            }
        }

        redirect(`/result/${data.uuid}`)
    }
    catch (error) {
        if (error instanceof Error) {
            return {
                error: error.message,
                timestamp: Date.now()
            }
        }
        return {
            error: "Unknown error",
            timestamp: Date.now()
        }
    }
}