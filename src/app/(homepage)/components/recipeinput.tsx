import { postRecipeUrl } from "../actions/postrecipeurl"
import Button from "@/shared/components/button";

type Properties = {
    placeholder?: string;
    className?: string;
}

export default function RecipeInput({ placeholder, className }: Properties) {
    return (
        <form action={postRecipeUrl} className="flex gap-2 w-4/5 max-w-4xl">
            <input
                name="recipeUrl"
                placeholder={placeholder}
                required
                className={`
                    flex-1
                    rounded text-center ring-inset ring-tertiary
                    ring-2 px-4 py-2 text-1xl
                    md:ring-3 md:px-6 md:py-4 md:text-3xl
                    focus:outline-none focus:ring-primary`
                }
            />
            <Button type="submit">
                Optimize
            </Button>
        </form>

    );
}