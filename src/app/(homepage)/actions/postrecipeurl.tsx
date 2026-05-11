"use server"

import { redirect } from "next/navigation"

export async function postRecipeUrl(formData: FormData) {
    const recipeUrl = formData.get("recipeUrl")
    if (!recipeUrl || typeof recipeUrl !== "string") {
        throw new Error("Recipe URL is missing")
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
        throw new Error(error.detail)
    }

    const data = await response.json()
    if (!data.id || typeof data.id !== "string") {
        throw new Error("Recipe ID is missing")
    }

    redirect(`/result/${data.id}`)
}