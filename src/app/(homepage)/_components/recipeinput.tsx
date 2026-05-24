"use client"

import { useActionState, useEffect } from "react"
import { toast } from "sonner"
import { postRecipeUrl } from "../_actions/postrecipeurl"
import { Button } from "@/shared/components/button";

type Properties = {
    placeholder?: string;
    className?: string;
}

export function RecipeInput({ placeholder, className }: Properties) {

    const [state, action, isPending] = useActionState(postRecipeUrl, {})
    useEffect(() => {
        if(state.error) {
            toast.error(state.error)
        }
    }, [state.error, state.timestamp])

    return (
        <form action={action} className="flex gap-2 w-4/5 max-w-4xl">
            <input
                name="recipeUrl"
                placeholder={placeholder}
                autoComplete="off"
                className={`
                    flex-1
                    rounded text-center ring-inset ring-tertiary
                    ring-2 px-4 py-2 text-1xl
                    md:ring-3 md:px-6 md:py-4 md:text-3xl
                    focus:outline-none focus:ring-primary
                    ${className}`
                }
            />
            <Button type="submit" disabled={isPending}>
                {isPending ? "loading..." : "Optimize"}
            </Button>
        </form>
    );
}